$(".toggle-btn").click(function (e) {
  e.preventDefault();
  var textContainer = $(this).prev(); // Ищем контейнер с текстом
  textContainer.toggleClass("text-open"); // Переключаем класс для скрытия/показа текста

  // Меняем текст кнопки в зависимости от состояния
  if (textContainer.hasClass("text-open")) {
    $(this).text("Less"); // Если текст раскрыт, меняем на "Less"
  } else {
    $(this).text("Read more"); // Если текст скрыт, меняем обратно на "Read more"
  }

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
