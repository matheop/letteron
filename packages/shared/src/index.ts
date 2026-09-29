/** Types du domaine LetterOn (un « item » de la spec = un bookmark dans l'UI) — source : spec « Modèle de données » et journal de décisions. */

/** Les 4 types de contenu du MVP (D-28, D-35). « post » = post X, tweet seul ou thread. */
export type ItemType = "video" | "post" | "article" | "link";

/** Statut de lecture (D-11). Indépendant des collections. */
export type ReadingStatus = "to_read" | "archived";

/** Saved content. UI term: "bookmark" (UI is in English for now). */
export interface Bookmark {
  id: string;
  url: string;
  type: ItemType;
  title: string;
  image?: string;
  favicon?: string;
  siteName?: string;
  excerpt?: string;
  /** Texte parsé, articles seulement (D-10). */
  content?: string;
  /** Vidéo seulement, en secondes (affiché « 18:42 »). */
  durationSeconds?: number;
  /** Article seulement, en minutes, calculé depuis le texte parsé (affiché « 8 min read »). */
  readingTimeMinutes?: number;
  status: ReadingStatus;
  /** 0 ou 1 collection (D-36, D-42). */
  collectionId?: string;
  tagIds: string[];
  /** Tri (D-40) et affichage dans la liste : « 3h ago », « 2d ago », puis « Sep 12 » (décision du 2026-09-29, révise D-21). */
  addedAt: string;
}

export interface Collection {
  id: string;
  name: string;
}

export interface Tag {
  id: string;
  name: string;
}

/** Contrat de capture : l'extension n'envoie que l'URL, le serveur fait le reste. */
export interface CaptureRequest {
  url: string;
}
export type CaptureResponse = { ok: true; bookmark: Bookmark } | { ok: false; error: string };

/**
 * Premières étapes de la règle de détection (spec « Contrat de capture »).
 * Les étapes 3 et 4 (liste blanche presse, seuil ~300 mots après parsing) se font côté serveur.
 * Renvoie null quand l'URL seule ne suffit pas.
 */
export function detectTypeFromUrl(raw: string): ItemType | null {
  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    return null;
  }
  const host = u.hostname.replace(/^www\.|^m\./, "");
  if (host === "youtube.com" || host === "youtu.be") {
    // Shorts et playlists → lien (D-34)
    if (u.pathname.startsWith("/shorts/") || u.pathname === "/playlist") return "link";
    if (host === "youtu.be" && u.pathname.length > 1) return "video";
    if (u.pathname === "/watch" && u.searchParams.has("v")) return "video";
    return "link";
  }
  if ((host === "x.com" || host === "twitter.com") && /^\/[^/]+\/status\/\d+/.test(u.pathname)) {
    return "post";
  }
  return null;
}
