const controlsPressefeed = document.querySelector('.photo-card-controls-pressefeed');
const cardContainerPressefeed = document.querySelector('.photo-card-container-pressefeed');
cardContainerPressefeed.style.scrollBehavior = "smooth";


controlsPressefeed.addEventListener('click', makeNextOrPrevForPressefeed);

function makeNextOrPrevForPressefeed(event) {
    const actionTypePressefeed = event.target.closest('.icon-btn-pressefeed').dataset.action;

    if (actionTypePressefeed == 'next-pressefeed') {
        cardContainerPressefeed.scrollLeft += 420;
    } else if (actionTypePressefeed == 'prev-pressefeed'){
        cardContainerPressefeed.scrollLeft -= 430;
    }
}