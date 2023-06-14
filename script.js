const shareBtn = document.querySelector('.btn');
const popup = document.querySelector('.popup');

const showPopup = shareBtn.addEventListener('click', () => {
	popup.classList.add('popup--active');
});

const closePopup = document.addEventListener('click', (e) => {
	const isClosestBtn = e.target.closest('.btn');
	const isClosestPopup = e.target.closest('.popup');
	const isContainsActiveClass = popup.classList.contains('popup--active');

	if (!isClosestBtn && !isClosestPopup && isContainsActiveClass) {
		popup.classList.remove('popup--active');
	}
});


