const signUpBtn = document.getElementById('signUp-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

const openModalHandler = () => {
    modal.style.display = 'black';
    container.style.backgroundColor = '#000';
};

const closeModalHandler = () => {
    modal.style.display = 'none';
    container.style.backgroundColor = 'transparent';
};

const modalOverlayHandler = () => {
    if (modal.style.visibility === 'visible') {
        closeModalHandler();
    }
};

container.addEventListener('click', modalOverlayHandler);
signUpBtn.addEventListener('click', openModalHandler);
closeBtn.addEventListener('click', closeModalHandler);
