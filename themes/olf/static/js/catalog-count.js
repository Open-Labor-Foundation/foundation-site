(function () {
  "use strict";

  var el = document.getElementById("catalog-count");
  if (!el) return;

  // v2: labor-commons gained a second catalog axis (function-overlays,
  // generic corporate-function specialists) alongside naics-overlays
  // (industry-vertical). Bumped the cache key so no stale v1 count
  // (naics-overlays only) lingers in anyone's browser for the old TTL.
  var CACHE_KEY = "olf-catalog-count-v2";
  var CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
  var SPEC_PATTERN = /^catalog\/(naics-overlays|function-overlays)\/[^/]+\/[^/]+\/spec\.yaml$/;

  function render(count) {
    el.textContent = count.toLocaleString("en-US");
  }

  function readCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var cached = JSON.parse(raw);
      if (Date.now() - cached.at > CACHE_TTL_MS) return null;
      return cached.count;
    } catch (e) {
      return null;
    }
  }

  function writeCache(count) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ count: count, at: Date.now() }));
    } catch (e) {
      // localStorage unavailable (private mode, quota, etc.) — skip caching.
    }
  }

  var cached = readCache();
  if (cached !== null) {
    render(cached);
    return;
  }

  fetch("https://api.github.com/repos/Open-Labor-Foundation/labor-commons/git/trees/main?recursive=1")
    .then(function (res) {
      if (!res.ok) throw new Error("GitHub API error: " + res.status);
      return res.json();
    })
    .then(function (data) {
      if (data.truncated) throw new Error("tree response truncated");
      var count = data.tree.filter(function (entry) {
        return entry.type === "blob" && SPEC_PATTERN.test(entry.path);
      }).length;
      if (count === 0) throw new Error("no specialist definitions found");
      writeCache(count);
      render(count);
    })
    .catch(function () {
      // Leave the static "Every" fallback in place — no third-party
      // dependency should be able to break the page.
    });
})();
