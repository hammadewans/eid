import Router from "./router.js";
import Header from "./components/header.js";
import Navbar from "./components/navbar.js";

import Home from "./pages/home.js";
import Dua from "./pages/dua.js";
import Jantari from "./pages/jantari.js";

Header();
Navbar();

const router = new Router("content");

router.init(Home);

document.addEventListener("navigate", (e) => {
  const page = e.detail.page;

  if (page === "dua") {
    router.navigate(Dua);
  }
  else if (page === "jantari") {
    router.navigate(Jantari);
  }
  else {
    router.navigate(Home);
  }
});