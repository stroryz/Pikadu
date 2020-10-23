// Создаем кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную с меню
let menu = document.querySelector('.sidebar');
// Отслеживаем событие при нажатии и создаем функцию
menuToggle.addEventListener('click', function (event) {
  // Отменяем стандартное поведение, в данном случае, ссылки
  event.preventDefault();
  // Присваиваем или убираем класс элемента
  menu.classList.toggle('visible');
})