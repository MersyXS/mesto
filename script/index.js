//config
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//popup
const popupEditProfile = document.querySelector(".popup");
const popupProfile = document.querySelector(".profile-popup");
const popupAdd = document.querySelector(".add-popup");
const popupImage = document.querySelector(".image-popup");

//Кнопки открытие popup
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");

//Кнопки закрытие popup
const closeButtonAdd = popupAdd.querySelector(".popup__close-button");
const closeButtonEdit = popupProfile.querySelector(".popup__close-button");
const closeButtonImage = popupImage.querySelector(".popup__close-button");

//Элементы image-popup
const popupText = popupImage.querySelector(".popup__image-title");
const popupImageElement = popupImage.querySelector(".popup__image");

//Элементы card-popup
const namePlace = popupAdd.querySelector("#add-name-input");
const urlInput = popupAdd.querySelector("#add-url-input");

//Элементы profile-popup
const nameInput = popupProfile.querySelector("#edit-name-input");
const jobInput = popupProfile.querySelector("#edit-profession-input");

//Элементы имя и профессия
const names = document.querySelector(".profile__name");
const profession = document.querySelector(".profile__subname");

//template
const cardTemplate = document.querySelector(".item_template").content;

const cardsContainer = document.querySelector(".elements__items");
const profileForm = popupProfile.querySelector(".popup__form");
const cardForm = popupAdd.querySelector(".popup__form_add");

enableValidation(validationConfig);

const setCardEventListeners = function (contElement) {
  const buttonLike = contElement.querySelector(".elements__like-button");
  const buttonDelete = contElement.querySelector(".elements__delete-button");
  const buttonOpen = contElement.querySelector(".elements__image");
  buttonLike.addEventListener("click", handleLikeClick);
  buttonDelete.addEventListener("click", deleteCard);

  buttonOpen.addEventListener("click", function (evt) {
    const target = evt.target;
    const currentListElementImage = target.closest(".elements__image").src;
    const currentListElementText =
      contElement.querySelector(".elements__title").textContent;
    popupText.textContent = currentListElementText;
    popupImageElement.src = currentListElementImage;
    popupImageElement.alt = currentListElementText;
    openPopup(popupImage);
  });
};

//Открытие попапа
function openPopup(popup) {
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
  nameInput.value = names.textContent;
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
function handleEditClick(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  names.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closePopup(popupProfile);
}

//Добавление карточки из масива
function createCard(cardData) {
  const contElement = cardTemplate.querySelector(".elements__item").cloneNode(true);
  contElement.querySelector(".elements__title").textContent = cardData.name;
  contElement.querySelector(".elements__image").src = cardData.link;
  contElement.querySelector(".elements__image").alt = cardData.name;
  setCardEventListeners(contElement);
  return contElement;
}

//Добавление карточки из popup
function handleCardFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const name = namePlace.value;
  const link = urlInput.value;
  renderCard({ name, link });
  closePopup(popupAdd);
  namePlace.value = "";
  urlInput.value = "";
}

//Рендор карточки
const renderCard = function (text) {
  const contElement = createCard(text);
  cardsContainer.prepend(contElement);
};

initialCards.forEach(renderCard);

//Функция лайка
function handleLikeClick(evt) {
  const target = evt.target;
  const currentListElement = target.closest(".elements__like-button");
  currentListElement.classList.toggle("elements__like-button_active");
}

//Функция удаления карточки
function deleteCard(evt) {
  const target = evt.target;
  const currentListElement = target.closest(".elements__item");
  currentListElement.remove();
}

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
closeButtonEdit.addEventListener("click", closeProfilePopup);

buttonAdd.addEventListener("click", openAddCard);
closeButtonAdd.addEventListener("click", closeAddCard);

closeButtonImage.addEventListener("click", closeAddImage);

cardForm.addEventListener("submit", handleCardFormSubmit);
profileForm.addEventListener("submit", handleEditClick);