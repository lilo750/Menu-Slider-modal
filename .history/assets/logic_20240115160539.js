const signUpBtn = document.getElementById('signUp-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.querySelector('.modal');
/*
when the user click on the signup btn a modal will show by switching from hidden to visiblity visible
something i should consider before writing the code which is handle the close btn and submit btn and writing the html and css for the code

*/

visibility: ;
            pointer-events: none;


const modalHandler = () => {
    modal.target.style.pointerEvents = 'visible';
    modal.target.style.visibility = 'visible';
};

signUpBtn.addEventListener('click', modalHandler);
