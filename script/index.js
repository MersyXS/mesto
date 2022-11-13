const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const itemTemplate = document.querySelector('.item_template');
const popup = document.querySelector('.popup');
const cont= document.querySelector('.elements');
const container = document.querySelector('.elements__items');
const popupImageZoom = container.querySelector('.elements__image');
const popup_edit = document.querySelector('.popup_edit');
const popup_add = document.querySelector('.popup_add');
const popup_image = document.querySelector('.popup_image');
let formsEdit = popup_edit.querySelector('.popup__form');
let formsAdd = popup_add.querySelector('.popup__form');
const closeButtonAdd = popup_add.querySelector('.popup__close-button');
const closeButtonEdit = popup_edit.querySelector('.popup__close-button');
const closeButtonImage = popup_image.querySelector('.popup__close-button');
let names = document.querySelector('.profile__name');
let professon = document.querySelector('.profile__subname');
let nameInput = popup_edit.querySelector('#edit-name-input');
const test1 = document.querySelector('.elements__image');
let jobInput = popup_edit.querySelector('#edit-profession-input');
let namePlace = popup_add.querySelector('#add-name-input');
let UrlInput = popup_add.querySelector('#add-url-input');
const popupText = document.querySelector('.popup__image-title');
const popupImage = document.querySelector('.popup__image');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


//Открытие попапа редактирование профиля

const openPopup = function (popup){
  popup.classList.toggle('popup_opened');
  nameInput.value = names.textContent;
  jobInput.value = professon.textContent;
}

//Сохранение значений попапа редактирования

function savePopup(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.   
    names.textContent = nameInput.value;
    professon.textContent = jobInput.value;
    openPopup(popup_edit);
}

//Клонирование template

  const getItem = function(text) {
    const contElement = itemTemplate.content.cloneNode(true).children[0];
    contElement.querySelector('.elements__title').textContent = text.name;
    contElement.querySelector('.elements__image').src = text.link;
    contElement.querySelector('.elements__image').alt = text.name;
    return contElement;
}


//Функция лайка

  function addLike(evt){
    const target = evt.target;
    const currentListElement = target.closest('.elements__like-button');
    currentListElement.classList.toggle('elements__like-button_active');
    console.log(currentListElement);
  }

  //Функция удаления карточки

  function deleteCard(evt){
    const target = evt.target;
    const currentListElement = target.closest('.elements__item');
    currentListElement.remove();
  }

  const setEventListeners = function (contElement){
    const likeBtn = contElement.querySelector('.elements__like-button');
    const deleteBtn = contElement.querySelector('.elements__delete-button');
    const openBtn = contElement.querySelector('.elements__image');
    likeBtn.addEventListener('click', addLike);
    deleteBtn.addEventListener('click', deleteCard);


    openBtn.addEventListener('click', function(evt){
      const target = evt.target;
      const currentListElementImage = target.closest('.elements__image').src;
      const currentListElementText = contElement.querySelector('.elements__title').textContent;
      popupText.textContent = currentListElementText;
      popupImage.src = currentListElementImage;
      openPopup(popup_image);
    });
  }
  

const rendemItem = function(text){
    const contElement = getItem(text);
    container.append(contElement);
    setEventListeners(contElement);
}


initialCards.forEach(rendemItem);

function addItem(evt){
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.  
  const contElement = itemTemplate.content.cloneNode(true).children[0];
  contElement.querySelector('.elements__title').textContent = namePlace.value;
  contElement.querySelector('.elements__image').src = UrlInput.value;
  namePlace.value = "";
  UrlInput.value = "";
  return contElement;
};

const addRendem = function(text){
  const contElement = addItem(text);
  container.prepend(contElement);
  openPopup(popup_add);
  setEventListeners(contElement);
}

buttonEdit.addEventListener('click', function (){
  openPopup(popup_edit);
});

closeButtonEdit.addEventListener('click', function (){
  openPopup(popup_edit);
});


buttonAdd.addEventListener('click', function (){
  openPopup(popup_add);
});

closeButtonAdd.addEventListener('click', function (){
  openPopup(popup_add);
});

closeButtonImage.addEventListener('click', function (){
  openPopup(popup_image);
});


formsAdd.addEventListener('submit', addRendem);
formsEdit.addEventListener('submit', savePopup);

