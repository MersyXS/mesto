import { popupText, popupImageElement, popupImage } from "./constants.js";
import { openPopup } from "./index.js";

class Card {
    constructor({ name, link }) {
        this._name = name;
        this._link = link;
    }

    _getTemplateCard() {
        const card = document.querySelector(".item_template").content.querySelector(".elements__item").cloneNode(true);

        return card;
    }

    getView() {
        this._newCard = this._getTemplateCard();
        this._buttonLike = this._newCard.querySelector(".elements__like-button");
        this._cardImage = this._newCard.querySelector(".elements__image");
        this._setEventListeners();
        this._setData();
        return this._newCard;
    }

    _setData() {
        const name = this._newCard.querySelector(".elements__title");
        const link = this._newCard.querySelector(".elements__image");
        link.src = this._link;
        link.alt = this._name;
        name.textContent = this._name;
    }

    _setEventListeners() {
        const deleteCard = this._newCard.querySelector(".elements__delete-button");
        deleteCard.addEventListener("click", () => this._handleDelete());
        this._buttonLike.addEventListener("click", () => {
            this._likeCard();
        });

        this._cardImage.addEventListener("click", () => {
            const currentListElementImage = this._link;
            const currentListElementText = this._name;
            popupText.textContent = currentListElementText;
            popupImageElement.src = currentListElementImage;
            popupImageElement.alt = currentListElementText;
            openPopup(popupImage);
        });
    }



    _likeCard() {
        this._buttonLike.classList.toggle("elements__like-button_active");
    }
}

export default Card;