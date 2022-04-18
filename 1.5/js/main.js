function more() {
	const showLink = document.querySelector('.link');
	const infoList = document.querySelector('.info__list');

	function showMore(link, info) {
		showLink.addEventListener('click', () => {
			showLink.classList.toggle('link--hide');
			showLink.textContent = showLink.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
			infoList.classList.toggle('info__list--full');
		});
	}

	showMore(showLink, infoList);
}

more();
