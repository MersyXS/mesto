export default class Popup {
    constructor(popupContainer) {
        this._popupContainer = popupContainer;
    }
    open() {
        this._classList.add("popup_opened");
    }

    close() {
        this._classList.remove("popup_opened");
    }


    _handleEscClose() {
        if (evt.key === "Escape") {
            this.close;
        }
    }

    setEventListeners() {
        popup.addEventListener("mousedown", (evt) => {
            if (evt.target.classList.contains("popup")) {
                this.close;
            }

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
