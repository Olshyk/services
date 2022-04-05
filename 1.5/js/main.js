const showLink = document.querySelector('.link');
const infoList = document.querySelector('.info__list');

showLink.addEventListener('click', () => {
  showLink.classList.toggle('link--hide');
  showLink.textContent = showLink.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
  infoList.classList.toggle('info__list--full')
})


