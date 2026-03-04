export default function Share(container) {
  container.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "share-wrapper";

  const title = document.createElement("h2");
  title.textContent = "Share Your Eid Greeting";
  wrapper.appendChild(title);

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter your name...";
  input.id = "share-name";
  wrapper.appendChild(input);

  const button = document.createElement("button");
  button.textContent = "Share";
  wrapper.appendChild(button);

  const preview = document.createElement("div");
  preview.className = "share-preview";
  preview.textContent = "";
  wrapper.appendChild(preview);

  container.appendChild(wrapper);

  // Update live preview
  input.addEventListener("input", () => {
    const name = input.value.trim();
    preview.textContent = name ? `Eid Mubarak, ${name}!` : "";
  });

  // Share button click event
  button.addEventListener("click", () => {
    const name = input.value.trim();
    if (!name) {
      alert("Please enter a name!");
      return;
    }

    const shareText = `Eid Mubarak, ${name}! Check this greeting:`;
    const shareLink = `https://eid-mtpv.onrender.com/#/${encodeURIComponent(name)}`;

    // Use Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: "Eid Mubarak!",
        text: shareText,
        url: shareLink
      }).catch(err => console.log("Share failed:", err));
    } else {
      // Open WhatsApp Web link
      const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareLink)}`;
      window.open(whatsappURL, "_blank");
    }
  });
}