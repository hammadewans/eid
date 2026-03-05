export default function Share(container) {
  container.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "share-wrapper";

  const title = document.createElement("h2");
  title.textContent = "Apna naam daal kar Eid Mubarak share karein";
  wrapper.appendChild(title);

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Apna naam likhein...";
  input.id = "share-name";
  wrapper.appendChild(input);

  const button = document.createElement("button");
  button.textContent = "WhatsApp par share karein";
  wrapper.appendChild(button);

  const preview = document.createElement("div");
  preview.className = "share-preview";
  preview.textContent = "";
  wrapper.appendChild(preview);

  container.appendChild(wrapper);

  // Live preview
  input.addEventListener("input", () => {
    const name = input.value.trim();
    preview.textContent = name ? `${name} ne aapke liye Eid Mubarak message bheja hai` : "";
  });

  // Share button
  button.addEventListener("click", () => {
    const name = input.value.trim();

    if (!name) {
      alert("Please apna naam likhein!");
      return;
    }

    const shareLink = `https://eid-mtpv.onrender.com/#/${encodeURIComponent(name)}`;

    const shareText =
`🌙 ${name} ne aapke liye Eid Mubarak message bheja hai

👇 Dekhne ke liye neeche blue link par click karein
${shareLink}`;

    // Web Share API
    if (navigator.share) {
      navigator.share({
        title: "Eid Mubarak",
        text: shareText
      }).catch(err => console.log(err));
    } 
    else {
      const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
      window.open(whatsappURL, "_blank");
    }
  });
}
