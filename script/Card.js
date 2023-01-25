import { popupText, popupImageElement, popupImage } from "./constants.js";
import { openPopup } from "./index.js"

class Card {
    constructor({ name, link }) {
        this._name = name;
        this._link = link;
    }

    _getTemplateCard() {
        const card = document
            .querySelector(".item_template")
            .content.querySelector(".elements__item")
            .cloneNode(true);

        return card;
    }

    _handleDelete() {
        this._newCard.remove();
    }

    _likeCard() {
        const likeCard = this._newCard.querySelector('.elements__like-button');
        likeCard.classList.toggle('elements__like-button_active');
    }

    _setEventListeners() {
        const deleteCard = this._newCard.querySelector(".elements__delete-button");
        deleteCard.addEventListener("click", () => this._handleDelete());

        this._newCard.querySelector('.elements__like-button').addEventListener('click', () => {
            this._likeCard();
        })


        this._newCard.querySelector('.elements__image').addEventListener("click", () => {
            const currentListElementImage = this._newCard.querySelector(".elements__image").src;
            const currentListElementText = this._newCard.querySelector(".elements__title").textContent;
            popupText.textContent = currentListElementText;
            popupImageElement.src = currentListElementImage;

            console.log({ currentListElementText, currentListElementImage })

            openPopup(popupImage);
        });

    }

    _setData() {
        const name = this._newCard.querySelector(".elements__title");
        const link = this._newCard.querySelector(".elements__image");
        link.src = this._link;
        name.textContent = this._name;
    }

    getView() {
        this._newCard = this._getTemplateCard();
        this._setEventListeners();
        this._setData();

        return this._newCard;
    }
}

export default Card;
