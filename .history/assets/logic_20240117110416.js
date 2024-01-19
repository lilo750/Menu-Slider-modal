const signUpBtn = document.getElementById('signUp-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');
const burgerBtn = document.getElementById('burger-btn');
const menu = document.querySelector('aside');

const openModalHandler = (event) => {
    event.stopPropagation(); // Stop the event from propagating to the container
    modal.style.pointerEvents = 'auto';
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
};

const closeModalHandler = () => {
    modal.style.pointerEvents = 'none';
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
};

const modalOverlayHandler = () => {
    if (modal.style.visibility === 'visible') {
        closeModalHandler();
    }
};

const menuHandler = () => {
    menu.style.display = 'block';
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        console.log('i am closed now');
    }
};

container.addEventListener('click', modalOverlayHandler);
signUpBtn.addEventListener('click', openModalHandler);
closeBtn.addEventListener('click', closeModalHandler);
burgerBtn.addEventListener('click', menuHandler);
