let ButtonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let LikeButton = document.querySelector(".elements__like-button")
let CloseButton = document.querySelector('.form__button-close');
let SaveButton = document.querySelector('.form__button-save');
let Name = document.querySelector('.profile__name');
let Professon = document.querySelector('.profile__subname');
let nameInput = document.querySelector('.form__name');
let jobInput = document.querySelector('.form__profession');

function OpenPopup(){
    popup.classList.add('popup__opened');
    nameInput.value = Name.textContent;
    jobInput.value = Professon.textContent;
}

function Like(){
    LikeButton.classList.add('elements__like-button_active');
}

function ClosePopup(){
    popup.classList.remove('popup__opened');
}


function SavePopup(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.   
    Name.innerHTML = `<h1 class="profile__name">${nameInput.value}</h1>`
    Professon.innerHTML = `<p class="profile__subname">${jobInput.value}</p>`
    ClosePopup();
}


ButtonEdit.addEventListener('click', OpenPopup);
CloseButton.addEventListener('click', ClosePopup);
SaveButton.addEventListener('click', SavePopup);
LikeButton.addEventListener('click', Like);