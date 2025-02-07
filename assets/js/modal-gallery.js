let currentIndex = 0; // Индекс текущего изображения
let autoChangeInterval; // Переменная для хранения интервала

// Открытие модального окна с изображением
function openModal(imgElement) {
  let modal = document.getElementById("modal");
  let modalImg = document.getElementById("modal-img");
  let galleryImages = document.querySelectorAll(
    ".gallery-item img, .all-gallery-item img"
  ); // Все изображения из обеих галерей

  // Находим индекс выбранного изображения в галерее
  currentIndex = Array.from(galleryImages).indexOf(imgElement);

  modal.style.display = "flex";
  modalImg.src = imgElement.src;

  // Останавливаем предыдущий интервал, если был
  clearInterval(autoChangeInterval);

  // Функция для изменения изображения
  autoChangeInterval = setInterval(function () {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
      currentIndex = 0; // Если достигли последнего изображения, переходим к первому
    }
    modalImg.src = galleryImages[currentIndex].src;
  }, 3000); // Меняем изображение каждые 3 секунды

  // Обработчик для смены изображения по клику на изображение в модальном окне
  modal.onclick = function (event) {
    // Если клик был по изображению, меняем его
    if (event.target.id === "modal-img") {
      currentIndex++;
      if (currentIndex >= galleryImages.length) {
        currentIndex = 0; // Если достигли последнего изображения, переходим к первому
      }
      modalImg.src = galleryImages[currentIndex].src;
    } else {
      closeModal();
    }
  };
}

// Закрытие модального окна
function closeModal() {
  document.getElementById("modal").style.display = "none";
  // Останавливаем смену изображений при закрытии модального окна
  clearInterval(autoChangeInterval);
}

document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
});
