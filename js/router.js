export default class Router {
  constructor(contentId) {
    this.content = document.getElementById(contentId);
    this.name = "Guest";
    this.currentPage = null;
  }

  /* =========================
     INIT ROUTER
  ========================= */
  init(defaultPage) {
    window.addEventListener("load", () => this.resolve(defaultPage));
    window.addEventListener("hashchange", () => this.resolve(defaultPage));

    // If hash does not start with #/ fix it
    if (!location.hash.startsWith("#/")) {
      history.replaceState(null, "", "#/");
    }
  }

  /* =========================
     RESOLVE ROUTE
  ========================= */
  resolve(defaultPage) {
    let raw = location.hash.replace("#/", "");

    // Decode safely (supports spaces like %20)
    try {
      raw = decodeURIComponent(raw);
    } catch {
      history.replaceState(null, "", "#/");
      this.name = "Guest";
      this.navigate(defaultPage);
      return;
    }

    raw = raw.trim();

    // Allow letters and spaces only
    const valid = /^[a-zA-Z\s]{2,40}$/;

    if (!raw || !valid.test(raw)) {
      history.replaceState(null, "", "#/");
      this.name = "Guest";
    } else {
      this.name = raw;

      // Clean encoded URL format
      const clean = encodeURIComponent(raw);
      if (location.hash !== `#/${clean}`) {
        history.replaceState(null, "", `#/${clean}`);
      }
    }

    this.navigate(defaultPage);
  }

  /* =========================
     NAVIGATE PAGE
  ========================= */
  navigate(pageFunction) {
    if (!pageFunction) return;

    this.content.innerHTML = "";
    pageFunction(this.content, this.name);
  }
}