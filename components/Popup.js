export default class Popup {
    constructor(popupContainer) {
        this._popupContainer = document.querySelector(popupContainer);
        this._closePopup = this._popupContainer.querySelector('.popup__close-button');
        this._handleEscClose  = this._handleEscClose.bind(this);
    }

//Открытие модального окна
    open() {
        this._popupContainer.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

//Закрытие модального окна
    close() {
        this._popupContainer.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

//Закрытие модального окна на esc
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
          this.close();
        }
      }


    setEventListeners() {
        this._popupContainer.addEventListener("mousedown", (evt) => {
            if (evt.target.classList.contains("popup")) {
                this.close();
            }
        });

        this._closePopup.addEventListener("click", () => {
            this.close();
        });

    }
}