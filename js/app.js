import Router from "./router.js";
import Header from "./components/header.js";
import Navbar from "./components/navbar.js";

import Home from "./pages/home.js";
import Dua from "./pages/dua.js";
import Jantari from "./pages/jantari.js";
import Share from "./pages/share.js"; // ✅ renamed to avoid conflict

// Initialize header and navbar
Header();
Navbar();

// ---------- Dynamic content height fix ----------
function setContentHeight() {
  const header = document.querySelector('.main-header');
  const navbar = document.querySelector('#navbar');
  const content = document.getElementById('content');

  if (!header || !navbar || !content) return;

  const viewportHeight = window.innerHeight;
  const headerHeight = header.offsetHeight;
  const navbarHeight = navbar.offsetHeight;

  content.style.height = (viewportHeight - headerHeight - navbarHeight) + "px";
}

// Call on load and resize
window.addEventListener("load", setContentHeight);
window.addEventListener("resize", setContentHeight);

// Initialize router
const router = new Router("content");

// Load the default page
router.init(Home);

// Navigation event listener
document.addEventListener("navigate", (e) => {
  const page = e.detail.page;

  if (page === "dua") router.navigate(Dua);
  else if (page === "jantari") router.navigate(Jantari);
  else if (page === "share") router.navigate(Share);
  else router.navigate(Home);

  // Fix content height after navigation
  setContentHeight();
});
