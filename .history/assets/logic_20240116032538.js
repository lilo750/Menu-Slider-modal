const signUpBtn = document.getElementById('signUp-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

/*
when the user click on the signup btn a modal will show by switching from hidden to visiblity visible
something i should consider before writing the code which is handle the close btn and submit btn and writing the html and css for the code

*/

const openModalHandler = () => {
    modal.style.pointerEvents = 'visible';
    modal.style.visibility = 'visible';
};

const closeModalHandler = () => {
    modal.style.pointerEvents = 'none';
    modal.style.visibility = 'hidden';
};

signUpBtn.addEventListener('click', openModalHandler);
closeBtn.addEventListener('click', closeModalHandler);
