export default class FormValidator {
  constructor(formSelector, formElement) {
    this._formElement = formElement;

    //Селекторы формы
    this._formSelector = formSelector.formSelector;
    this._inputSelector = formSelector.inputSelector;
    this._submitButtonSelector = formSelector.submitButtonSelector;
    this._inactiveButtonClass = formSelector.inactiveButtonClass;
    this._inputErrorClass = formSelector.inputErrorClass;
    this._errorClass = formSelector.errorClass;

    //Инпуты
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );

    //Кнопки
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(this._inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
    inputElement.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation = () => {
    this._setEventListeners();
  };
}
