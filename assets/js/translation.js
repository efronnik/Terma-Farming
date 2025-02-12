document.addEventListener("DOMContentLoaded", () => {
  const languageDropdown = document.getElementById("language-dropdown");

  // Загружаем сохраненный язык (если есть)
  const savedLanguage = localStorage.getItem("language") || "en";
  languageDropdown.value = savedLanguage;

  if (savedLanguage !== "en") {
    loadLanguage(savedLanguage);
  }

  languageDropdown.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("language", selectedLanguage);

    if (selectedLanguage === "en") {
      location.reload(); // Перезагружаем страницу для английского
    } else {
      loadLanguage(selectedLanguage);
    }
  });
});

function loadLanguage(lang) {
  fetch(`assets/locales/${lang}.json`)
    .then((response) => response.json())
    .then((translations) => {
      document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[key]) {
          element.innerHTML = translations[key];
        }
      });
    })
    .catch((error) => console.error("Ошибка загрузки перевода:", error));
}
