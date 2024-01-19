const signUpBtn = document.getElementById('signUp-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

const openModalHandler = () => {
    modal.style.pointerEvents = 'visible';
    modal.style.visibility = 'visible';
};

const closeModalHandler = () => {
    modal.style.pointerEvents = 'none';
    modal.style.visibility = 'hidden';
};

const modalOverlayHandler = () => {
    if ((modal.style.visibility = 'visible')) {
        body.style.backgroundColor = '#000'; // will add the darker background
        let el = document.createElement('p');
        el.innerText = 'all rightttttt';
        container.appendChild('el');
    }
};

signUpBtn.addEventListener('click', openModalHandler);
closeBtn.addEventListener('click', closeModalHandler);
container.addEventListener('click', modalOverlayHandler);
