const signUpBtn = document.getElementById('signUp-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

const openModalHandler = () => {
    // event.stopPropagation(); // Stop the event from propagating to the container
    modal.style.visibility = 'visible';
    modal.style.pointerEvent = 'visible';
    // modal.style.opacity = '1';
    document.body.style.backgroundColor = '#10101010';
};

const closeModalHandler = () => {
    modal.style.visibility = 'hidden';
    // modal.style.opacity = '0';
    container.style.backgroundColor = 'white';
};

const modalOverlayHandler = () => {
    if (modal.style.visibility === 'visible') {
        // closeModalHandler();
    }
};

container.addEventListener('click', modalOverlayHandler);
signUpBtn.addEventListener('click', openModalHandler);
closeBtn.addEventListener('click', closeModalHandler);
