let buttonEdit = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let forms = popup.querySelector('.popup__form');
let closeButton = document.querySelector('.popup__close-button');
let names = document.querySelector('.profile__name');
let professon = document.querySelector('.profile__subname');
let nameInput = popup.querySelector('#popup__name-input');
let jobInput = popup.querySelector('#popup__profession-input');


function openPopup(){
    popup.classList.add('popup_opened');
    nameInput.value = names.textContent;
    jobInput.value = professon.textContent;
}


function closePopup(){
    popup.classList.remove('popup_opened');
}


function savePopup(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.   
    names.textContent = nameInput.value;
    professon.textContent = jobInput.value;
    closePopup();
}


buttonEdit.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
forms.addEventListener('submit', savePopup);