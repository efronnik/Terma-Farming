// Получаем кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Когда пользователь прокручивает страницу, показываем кнопку, если прокрутка больше 300px
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// При клике на кнопку прокручиваем страницу наверх
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
