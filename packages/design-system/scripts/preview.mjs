// Serveur local de consultation du design system (lecture seule).
// Usage : npm run preview -w packages/design-system   ->  http://localhost:4173
import { createServer } from "node:http";
import { readFile, readdir, stat } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const comps = join(root, "artifact", "components");
const port = Number(process.env.PORT || 4173);

// Toujours repartir d'un tokens.css à jour.
execFileSync("node", [join(root, "scripts", "build-tokens.mjs")], { stdio: "inherit" });

const types = { ".css": "text/css", ".js": "text/javascript", ".html": "text/html", ".json": "application/json" };
const send = (res, code, body, type = "text/plain") => {
  res.writeHead(code, { "content-type": `${type}; charset=utf-8`, "cache-control": "no-store" });
  res.end(body);
};

async function list() {
  const names = [];
  for (const n of await readdir(comps)) {
    try { await stat(join(comps, n, "preview.html")); names.push(n); } catch {}
  }
  return names.sort();
}

// Enveloppe un preview.html : React + tokens + bundle chargés avant son script.
function frame(html, theme) {
  const head = `
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/dist/tokens.css">
<link rel="stylesheet" href="/components/bundle.css">
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="/components/bundle.js"></script>
<style>body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--font-sans)}</style>`;
  html = html.includes("</head>") ? html.replace("</head>", head + "</head>") : head + html;
  return html.replace(/<html([^>]*)>/i, `<html$1 data-theme="${theme}">`);
}

createServer(async (req, res) => {
  const url = new URL(req.url, "http://x");
  const p = decodeURIComponent(url.pathname);
  try {
    if (p === "/") return send(res, 200, await readFile(join(root, "preview", "index.html")), "text/html");
    if (p === "/api/components") return send(res, 200, JSON.stringify(await list()), "application/json");
    if (p.startsWith("/frame/")) {
      const name = p.slice(7);
      if (!/^[A-Za-z]+$/.test(name)) return send(res, 400, "bad name");
      const html = await readFile(join(comps, name, "preview.html"), "utf8");
      return send(res, 200, frame(html, url.searchParams.get("theme") === "dark" ? "dark" : "light"), "text/html");
    }
    const file = p.startsWith("/dist/") ? join(root, p) : p.startsWith("/components/") ? join(root, "artifact", p) : null;
    if (!file || file.includes("..")) return send(res, 404, "not found");
    return send(res, 200, await readFile(file), types[extname(file)] || "application/octet-stream");
  } catch {
    return send(res, 404, "not found");
  }
}).listen(port, () => console.log(`Design system LetterOn -> http://localhost:${port}`));
