export default class Popup {
    constructor(popupContainer) {
        this._popupContainer = document.querySelector(popupContainer);
        this._closePopup = this._popupContainer.querySelector('.popup__close-button')
    }
    open() {
        this._popupContainer.classList.add("popup_opened");
    }

    close() {
        this._popupContainer.classList.remove("popup_opened");
    }


    _handleEscClose() {
        if (evt.key === "Escape") {
            this.close;
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

//     //Закрытие попада беграундом
//     const popupList = document.querySelectorAll(".popup");
// popupList.forEach((popup) => {
//     this.__popupContainer("mousedown", (evt) => {
//         if (evt.target.classList.contains("popup")) {
//             closePopup(popup);
//         }
//     });
// });
