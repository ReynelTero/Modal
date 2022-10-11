//BUTTONS
const openModal = document.querySelector('.button');
const closeModal = document.querySelector('.close-btn');
//BUTTONS

//VIEW-HIDE LAYER MODAL
const openModalContainer = document.querySelector('.close-container');
const closeModalContainer = document.querySelector('.modal-container');
//VIEW-HIDE LAYER MODAL

//BACKGROUND EFFECTS
const background = document.querySelector('.background');
//BACKGROUND EFFECTS

openModal.addEventListener('click', () => {
    if (openModalContainer.classList.contains('container')) {
        openModalContainer.classList.remove('container');
    }

    if (background.classList.contains('blurd-background') === false) {
        background.classList.add('blurd-background');
    }

    if (closeModalContainer.classList.contains('close-modal-container')) {
        closeModalContainer.classList.add('modal-container');
        closeModalContainer.classList.remove('close-modal-container');
    }
})


closeModal.addEventListener('click', () => {
    if (closeModalContainer.classList.contains('close-modal-container') === false) {
        closeModalContainer.classList.remove('modal-container');
        closeModalContainer.classList.add('close-modal-container');
    }

    if (background.classList.contains('blurd-background')) {
        background.classList.remove('blurd-background');
    }

    if (openModalContainer.classList.contains('container') === false) {
        openModalContainer.classList.add('container');
    }
})