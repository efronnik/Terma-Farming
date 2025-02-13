document.getElementById("startButton").addEventListener("click", function (e) {
  e.preventDefault(); // Отменяем стандартное поведение ссылки

  // Показываем скрытую картинку и запускаем анимацию
  const imageContainer = document.getElementById("image-container");
  imageContainer.classList.remove("hidden"); // Убираем класс .hidden

  // Запускаем анимацию
  imageContainer.style.animation = "fly-in-out 4.5s ease-in-out forwards";

  // По окончании анимации открываем новый сайт в новой вкладке
  setTimeout(function () {
    window.open("https://therma-sat.net/", "_blank"); // Переход на новый сайт в новой вкладке
  }, 4500); // Задержка в 4.5 секунды (время длительности анимации)

  // Перезагружаем текущую страницу после 5 секунд
  setTimeout(function () {
    location.reload(); // Перезагружаем текущую страницу
  }, 5000); // 5000 мс — 5 секунд после перехода
});
