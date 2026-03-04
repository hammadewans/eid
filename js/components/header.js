export default function Header() {
  const header = document.getElementById("header");
  if (!header) return;

  header.innerHTML = "";
  header.className = "main-header";

  const container = document.createElement("div");
  container.className = "header-container";

  const moon = document.createElement("span");
  moon.className = "moon";
  moon.textContent = "🌙";

  const title = document.createElement("h1");
  title.className = "header-title";
  title.textContent = "Ramazan 2026";

  container.appendChild(moon);
  container.appendChild(title);
  header.appendChild(container);

  const strip = document.createElement("div");
  strip.className = "corner-strip";
  header.appendChild(strip);
}