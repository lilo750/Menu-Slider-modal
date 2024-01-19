const signUpBtn = document.getElementById('signUp-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

const openModalHandler = () => {
    modal.style.pointerEvents = 'visible';
    modal.style.visibility = 'visible';
    container.style.backgroundColor = '#000';
};

const closeModalHandler = () => {
    modal.style.pointerEvents = 'none';
    modal.style.visibility = 'hidden';
    container.style.backgroundColor = 'transparent';
};

const modalOverlayHandler = () => {
    if (modal.style.visibility === 'visible') {
        modalOverlayHandler();
    }
};

container.addEventListener('click', modalOverlayHandler);
signUpBtn.addEventListener('click', openModalHandler);
closeBtn.addEventListener('click', closeModalHandler);
