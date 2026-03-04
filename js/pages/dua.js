export default function Dua(container) {
  const duas = [
    {
      title: "Sehri (Suhoor) Ki Niyyah",
      arabic: "نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ رَمَضَانَ هَذِهِ السَّنَةِ لِلَّهِ تَعَالَى",
      transliteration: "Nawaitu sauma ghadin 'an adaa'i fardhi Ramadhana hadhihis-sanati lillahi ta'ala",
      translation: "I intend to fast tomorrow in order to perform the obligation of Ramadan for Allah’s sake."
    },
    {
      title: "Sehri Ki Dua",
      arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
      transliteration: "Bismillahi wa ‘ala barakatillah",
      translation: "In the name of Allah and with Allah’s blessings."
    },
    {
      title: "Iftar Ki Dua",
      arabic: "اللّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
      transliteration: "Allahumma inni laka sumtu wa bika aamantu wa ‘alayka tawakkaltu wa ‘ala rizq-ika-aftartu",
      translation: "O Allah! I fasted for You, and I believe in You, and I put my trust in You, and with Your sustenance I break my fast."
    },
    {
      title: "Tarawih Ki Dua",
      arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
      transliteration: "Rabbana taqabbal minna innaka Anta As-Sami’ul ‘Aleem",
      translation: "Our Lord! Accept (this) from us. Surely, You are the All-Hearing, the All-Knowing."
    },
    {
      title: "General Dua",
      arabic: "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَاجْبُرْنِي",
      transliteration: "Rabbi ighfir li warhamni wahdini wajburni",
      translation: "My Lord, forgive me, have mercy on me, guide me, and strengthen me."
    }
  ];

  // Clear container
  container.innerHTML = "";

  // Header
  const header = document.createElement("h2");
  header.textContent = "Ramadan Duas";
  header.classList.add("dua-header");
  container.appendChild(header);

  // Card container
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("dua-cards");
  container.appendChild(cardContainer);

  // Create cards
  duas.forEach(dua => {
    const card = document.createElement("div");
    card.classList.add("dua-card");

    const title = document.createElement("h3");
    title.textContent = dua.title;
    title.classList.add("dua-title");
    card.appendChild(title);

    const arabic = document.createElement("p");
    arabic.textContent = dua.arabic;
    arabic.classList.add("dua-arabic");
    card.appendChild(arabic);

    const transliteration = document.createElement("p");
    transliteration.textContent = dua.transliteration;
    transliteration.classList.add("dua-transliteration");
    card.appendChild(transliteration);

    const translation = document.createElement("p");
    translation.textContent = dua.translation;
    translation.classList.add("dua-translation");
    card.appendChild(translation);

    cardContainer.appendChild(card);
  });
}