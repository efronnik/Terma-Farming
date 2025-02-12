$(".toggle-btn").click(function (e) {
  e.preventDefault();
  var textContainer = $(this).prev(); // Ищем контейнер с текстом
  textContainer.toggleClass("text-open"); // Переключаем класс для скрытия/показа текста

  // Меняем текст кнопки в зависимости от состояния
  if (textContainer.hasClass("text-open")) {
    $(this).attr("data-translate", "less_button"); // Динамически меняем на "Less"
  } else {
    $(this).attr("data-translate", "read_more_button"); // Меняем на "Read more"
  }

  // Переводим текст кнопки после изменения
  translateButtonText($(this));

  // Если текст раскрыт, прокручиваем страницу вверх до кнопки "Less"
  if (!textContainer.hasClass("text-open")) {
    $("html, body").animate(
      {
        scrollTop: $(this).offset().top - 20, // Прокручиваем страницу до кнопки с отступом
      },
      300
    ); // Время анимации 300мс
  }
});

// Функция для перевода кнопки
function translateButtonText(button) {
  const key = button.attr("data-translate");
  const language = localStorage.getItem("language") || "en"; // Загружаем текущий язык
  fetch(`assets/locales/${language}.json`)
    .then((response) => response.json())
    .then((translations) => {
      const translation = translations[key];
      if (translation) {
        button.text(translation); // Обновляем текст кнопки
      }
    })
    .catch((error) =>
      console.error("Ошибка при загрузке перевода кнопки:", error)
    );
}

// Первоначальный перевод для всех кнопок на странице
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".toggle-btn").forEach(function (button) {
    translateButtonText($(button)); // Переводим кнопки при загрузке
  });
});
