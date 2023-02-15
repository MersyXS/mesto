import Card from "./Card.js";
import Popup from '../components/Popup.js';
import Section from '../components/Section.js';
import FormValidator from "./FormValidator.js";
import {
  popupProfile,
  popupAdd,
  popupImage,
  validationConfig,
  buttonEdit,
  buttonAdd,
  buttonAddClose,
  buttonEditClose,
  buttonImageClose,
  namePlace,
  urlInput,
  buttonCreateCard,
  nameInput,
  jobInput,
  profileName,
  profession,
  cardsContainer,
  profileForm,
  cardForm,
} from "./constants.js";

//Параметры карточек
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];


//Открытие попапа редактирование профиля
const openProfilePopup = function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profession.textContent;
  openPopup(popupProfile);
};

//Закрытие попапа редактирование профиля
const closeProfilePopup = function () {
  closePopup(popupProfile);
};

//Открытие попапа добавление карточки
const openAddCard = function () {
  openPopup(popupAdd);
};

//Закрытие попапа редактирование профиля
const closeAddCard = function () {
  closePopup(popupAdd);
};

//Закрытие попапа с зумом
const closeAddImage = function () {
  closePopup(popupImage);
};

//Сохранение значений попапа редактирования
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closePopup(popupProfile);
}

const handleCardFormSubmit = (event) => {
  event.preventDefault();
  renderCard(createCard({ name: namePlace.value, link: urlInput.value }));
  namePlace.value = "";
  urlInput.value = "";
  closePopup(popupAdd);
  buttonCreateCard.disabled = true;
  buttonCreateCard.classList.add("popup__save-button_disabled");
};


// функционал создания новой карточки
const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: (name, link) => {
      const viewImagePopup = new PopupWithImage('.image-popup');
      viewImagePopup.setEventListeners();
      viewImagePopup.open(name, link);
    }
  }, '.item_template');
  const cardElement = card.getView();
  return cardElement;
};

const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, cardsContainer);


const EditProfileFormValidator = new FormValidator(validationConfig, popupProfile);
EditProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationConfig, popupAdd);
addCardFormValidator.enableValidation();


buttonEdit.addEventListener("click", openProfilePopup);
buttonEditClose.addEventListener("click", closeProfilePopup);

buttonAdd.addEventListener("click", openAddCard);
buttonAddClose.addEventListener("click", closeAddCard);

buttonImageClose.addEventListener("click", closeAddImage);

cardForm.addEventListener("submit", handleCardFormSubmit);
profileForm.addEventListener("submit", handleProfileFormSubmit);

cardsList.renderItems();