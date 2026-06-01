// Theme: defaults to the OS preference ("auto"); a tap cycles to an explicit
// light/dark choice that persists in localStorage. Three states keep the
// system-following default available while honoring a manual override.
(function () {
  var root = document.documentElement;
  var KEY = "humm-theme";

  var saved = localStorage.getItem(KEY);
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  } // else leave the default "auto" from the HTML attribute

  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    var current = root.getAttribute("data-theme");
    // Resolve what's actually showing, then flip to the opposite explicit theme.
    var showingDark = current === "dark" || (current === "auto" && prefersDark);
    var next = showingDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
  });
})();
