import "./index.css"; // добавьте импорт главного файла стилей
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import {
  popupProfile,
  popupAdd,
  validationConfig,
  buttonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  cardsContainer,
} from "../components/utils/Constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

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

//Создание новой карточки
const createCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: (name, link) => {
        viewImagePopup.open(name, link);
      },
    },
    ".item_template"
  );
  const cardElement = card.getView();
  return cardElement;
};

//Popup добавления карточки
const addCardPopup = new PopupWithForm({
  popupContainer: ".add-popup",
  handleFormSubmit: (data) => {
    const item = {
      name: data.name,
      link: data.link,
    };
    cardsList.addItem(createCard(item));
    addCardPopup.close();
  },
});

//Заполнение информации пользователя
function viewInputsValue({ username, job }) {
  nameInput.value = username;
  jobInput.value = job;
}

const userInfo = new UserInfo({
  username: ".profile__name",
  job: ".profile__subname",
});

const editProfilePopup = new PopupWithForm({
  popupContainer: ".profile-popup",
  handleFormSubmit: (dataForm) => {
    userInfo.setUserInfo({
      username: dataForm.username,
      job: dataForm.job,
    });
    editProfilePopup.close();
  },
});

const viewImagePopup = new PopupWithImage(".image-popup");
viewImagePopup.setEventListeners();

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardsList.addItem(createCard(item));
    },
  },
  cardsContainer
);

const editProfileFormValidator = new FormValidator(
  validationConfig,
  popupProfile
);
editProfileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(validationConfig, popupAdd);
addCardFormValidator.enableValidation();

buttonEdit.addEventListener("click", () => {
  const info = userInfo.getUserInfo();
  viewInputsValue({
    username: info.username,
    job: info.job,
  });
  editProfileFormValidator.resetValidation();
  editProfilePopup.open();
});

buttonAdd.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardPopup.open();
});

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
cardsList.renderItems();
