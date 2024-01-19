const signUpBtn = document.getElementById('signUp-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

const openModalHandler = () => {
    modal.style.pointerEvents = 'auto';
    modal.style.visibility = 'visible';
    console.log('i am opened now');
};

const closeModalHandler = () => {
    modal.style.pointerEvents = 'none';
    modal.style.visibility = 'hidden';
    console.log('i am closed now');
};

// const modalOverlayHandler = () => {
//     if (modal.style.visibility === 'visible') {
//     }
// };

container.addEventListener('click', modalOverlayHandler);
signUpBtn.addEventListener('click', openModalHandler);
closeBtn.addEventListener('click', closeModalHandler);
