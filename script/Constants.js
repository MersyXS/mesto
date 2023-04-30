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
const popupProfile = document.querySelector(".profile-popup");
const popupAdd = document.querySelector(".add-popup");
const popupImage = document.querySelector(".image-popup");

//Кнопки открытие popup
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");

//Кнопки закрытие popup
const buttonAddClose = popupAdd.querySelector(".popup__close-button");
const buttonEditClose = popupProfile.querySelector(".popup__close-button");
const buttonImageClose = popupImage.querySelector(".popup__close-button");

//Элементы image-popup
const popupText = popupImage.querySelector(".popup__image-title");
const popupImageElement = popupImage.querySelector(".popup__image");

//Элементы card-popup
const namePlace = popupAdd.querySelector("#add-name-input");
const urlInput = popupAdd.querySelector("#add-url-input");
const buttonCreateCard = popupAdd.querySelector(".popup__save-button");

//Элементы profile-popup
const nameInput = popupProfile.querySelector("#edit-name-input");
const jobInput = popupProfile.querySelector("#edit-profession-input");

//Элементы имя и профессия
const profileName = document.querySelector(".profile__name");
const profession = document.querySelector(".profile__subname");

//template
const cardTemplate = document.querySelector(".item_template").content;

const cardsContainer = document.querySelector(".elements__items");
const profileForm = popupProfile.querySelector(".popup__form");
const cardForm = popupAdd.querySelector(".popup__form_add");

export {
  popupProfile,
  popupAdd,
  popupImage,
  validationConfig,
  buttonEdit,
  buttonAdd,
  buttonAddClose,
  buttonEditClose,
  buttonImageClose,
  popupText,
  popupImageElement,
  namePlace,
  urlInput,
  buttonCreateCard,
  nameInput,
  jobInput,
  profileName,
  profession,
  cardTemplate,
  cardsContainer,
  profileForm,
  cardForm,
};
