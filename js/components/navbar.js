export default function Navbar() {
  const nav = document.getElementById("navbar");

  const pages = [
    { key: "home", label: "Home", icon: "bi-house-fill" },
    { key: "jantari", label: "Jantari", icon: "bi-calendar-event-fill" },
    { key: "dua", label: "Dua", icon: "bi-moon-stars-fill" },
    { key: "share", label: "Share", icon: "bi-share-fill" }
  ];

  pages.forEach((p, index) => {
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.dataset.page = p.key;

    if (index === 0) btn.classList.add("active");

    const icon = document.createElement("i");
    icon.className = `bi ${p.icon}`;

    const span = document.createElement("span");
    span.textContent = p.label;

    btn.appendChild(icon);
    btn.appendChild(span);
    nav.appendChild(btn);
  });

  nav.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    nav.querySelectorAll(".nav-btn").forEach(b =>
      b.classList.remove("active")
    );

    btn.classList.add("active");

    document.dispatchEvent(
      new CustomEvent("navigate", {
        detail: { page: btn.dataset.page }
      })
    );
  });
}