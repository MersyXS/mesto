import Card from "./Card.js";
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


//Открытие попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

//Закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

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

function createCard(name, link) {
  const card = new Card(name, link);
  return card.getView();
}

function renderCard(card) {
  cardsContainer.prepend(card);
}

initialCards.forEach((cardElement) => {
  renderCard(createCard(cardElement));
})

const EditProfileFormValidator = new FormValidator(validationConfig, popupProfile);
EditProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationConfig, popupAdd);
addCardFormValidator.enableValidation();

//Закрытие попада беграундом
const popupList = document.querySelectorAll(".popup");
popupList.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

buttonEdit.addEventListener("click", openProfilePopup);
buttonEditClose.addEventListener("click", closeProfilePopup);

buttonAdd.addEventListener("click", openAddCard);
buttonAddClose.addEventListener("click", closeAddCard);

buttonImageClose.addEventListener("click", closeAddImage);

cardForm.addEventListener("submit", handleCardFormSubmit);
profileForm.addEventListener("submit", handleProfileFormSubmit);