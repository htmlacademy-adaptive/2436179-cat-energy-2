/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('navigation--open');
});
