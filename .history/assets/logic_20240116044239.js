const signUpBtn = document.getElementById('signUp-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

const openModalHandler = () => {
    modal.style.pointerEvents = 'auto';
    modal.style.visibility = 'visible';
};

const closeModalHandler = () => {
    modal.style.pointerEvents = 'none';
    modal.style.visibility = 'hidden';
};

const modalOverlayHandler = () => {
    if (modal.style.visibility === 'visible') {
        closeModalHandler();
    }
};

container.addEventListener('click', modalOverlayHandler);
signUpBtn.addEventListener('click', openModalHandler);
closeBtn.addEventListener('click', closeModalHandler);
