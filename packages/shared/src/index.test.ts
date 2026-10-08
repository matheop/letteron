import { test } from "node:test";
import assert from "node:assert/strict";
import { detectTypeFromUrl } from "./index.ts";

test("YouTube watch and youtu.be links are videos", () => {
  assert.equal(detectTypeFromUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), "video");
  assert.equal(detectTypeFromUrl("https://m.youtube.com/watch?v=dQw4w9WgXcQ"), "video");
  assert.equal(detectTypeFromUrl("https://youtu.be/dQw4w9WgXcQ"), "video");
});

test("YouTube Shorts, playlists and other pages are links (D-34)", () => {
  assert.equal(detectTypeFromUrl("https://www.youtube.com/shorts/abc123"), "link");
  assert.equal(detectTypeFromUrl("https://www.youtube.com/playlist?list=PL123"), "link");
  assert.equal(detectTypeFromUrl("https://www.youtube.com/@channel"), "link");
  assert.equal(detectTypeFromUrl("https://www.youtube.com/watch"), "link");
});

test("X and Twitter status URLs are posts", () => {
  assert.equal(detectTypeFromUrl("https://x.com/user/status/1234567890"), "post");
  assert.equal(detectTypeFromUrl("https://twitter.com/user/status/1234567890/photo/1"), "post");
});

test("X profiles are not posts", () => {
  assert.equal(detectTypeFromUrl("https://x.com/user"), null);
});

test("returns null when the URL alone is not enough or is invalid", () => {
  assert.equal(detectTypeFromUrl("https://www.lemonde.fr/article"), null);
  assert.equal(detectTypeFromUrl("not a url"), null);
});
