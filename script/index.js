//popup
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.profile-popup');
const popupAdd = document.querySelector('.add-popup');
const popupImage = document.querySelector('.image-popup');

//Кнопки открытие popup
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

//Кнопки закрытие popup
const closeButtonAdd = popupAdd.querySelector('.popup__close-button');
const closeButtonEdit = popupProfile.querySelector('.popup__close-button');
const closeButtonImage = popupImage.querySelector('.popup__close-button');

//Элементы image-popup
const popupText = popupImage.querySelector('.popup__image-title');
const popupImageElement = popupImage.querySelector('.popup__image');

//Элементы card-popup
const namePlace = popupAdd.querySelector('#add-name-input');
const UrlInput = popupAdd.querySelector('#add-url-input');

//Элементы profile-popup
const nameInput = popupProfile.querySelector('#edit-name-input');
const jobInput = popupProfile.querySelector('#edit-profession-input');

//Элементы имя и профессия
const names = document.querySelector('.profile__name');
const professon = document.querySelector('.profile__subname');

//template
const itemTemplate = document.querySelector('.item_template').content;


const container = document.querySelector('.elements__items');
const formsEdit = popupProfile.querySelector('.popup__form');
const formsAdd = popupAdd.querySelector('.popup__form_add');



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
    popupImageElement.src = currentListElementImage;
    popupImageElement.alt = currentListElementText;
    openPopup(popupImage); 
  });
}


//Открытие попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//Закрытие попапа 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


//Открытие попапа редактирование профиля
const openProfilePopup = function() {
  nameInput.value = names.textContent;
  jobInput.value = professon.textContent;
  openPopup(popupProfile);
}

//Закрытие попапа редактирование профиля
  const closeProfilePopup = function() {
    closePopup(popupProfile);
}

//Открытие попапа добавление карточки
const openAddCard = function() {
  openPopup(popupAdd);
}

//Закрытие попапа редактирование профиля
  const closeAddCard = function() {
    closePopup(popupAdd);
}

//Закрытие попапа с зумом
const closeAddImage = function() {
  closePopup(popupImage);
}


//Сохранение значений попапа редактирования

function saveProfilePopup(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.   
    names.textContent = nameInput.value;
    professon.textContent = jobInput.value;
    closePopup(popupProfile);
}

//Добавление карточки из масива

function createCard(text){
  const contElement = itemTemplate.querySelector('.elements__item').cloneNode(true);
  contElement.querySelector('.elements__title').textContent = text.name;
  contElement.querySelector('.elements__image').src = text.link;
  contElement.querySelector('.elements__image').alt = text.name;
  setEventListeners(contElement);
  console.log('123');
  return contElement;
}

//Добавление карточки из popup

function addCards(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.   
  const target = evt.target;
  const name = target.querySelector('#add-name-input').value;
  const link = target.querySelector('#add-url-input').value;
  rendemItem({ name, link });
  closePopup(popupAdd);
};

//Рендор карточки

const rendemItem = function(text){
  const contElement = createCard(text);
  container.prepend(contElement);
}

initialCards.forEach(rendemItem);

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

  buttonEdit.addEventListener('click', openProfilePopup);
  closeButtonEdit.addEventListener('click', closeProfilePopup);

  buttonAdd.addEventListener('click', openAddCard);
  closeButtonAdd.addEventListener('click', closeAddCard);

  closeButtonImage.addEventListener('click', closeAddImage);





formsAdd.addEventListener('submit', addCards);
formsEdit.addEventListener('submit', saveProfilePopup);