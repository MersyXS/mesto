import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupContainer, handleFormSubmit }) {
    super(popupContainer);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupContainer.querySelector(".popup__form");
    this._inputList = Array.from(
      this._popupContainer.querySelectorAll(".popup__input")
    );
  }

  //Возвращает значения inputs
  _getInput() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInput());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
