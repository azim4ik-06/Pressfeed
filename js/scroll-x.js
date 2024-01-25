const controls = document.querySelector('.photo-card-controls');
const cardContainer = document.querySelector('.photo-card-container');
cardContainer.style.scrollBehavior = "smooth";

controls.addEventListener('click', makeNextOrPrev);

function makeNextOrPrev(event) {
    const actionType = event.target.closest('.icon-btn').dataset.action;

    if (actionType == 'next') {
        cardContainer.scrollLeft += 380;
    } else if (actionType == 'prev'){
        cardContainer.scrollLeft -= 400
    }
}