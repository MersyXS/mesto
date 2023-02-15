export default class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
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

    _handleOpenPopup() {
        this._handleCardClick(this._name, this._link);
    }

    _setEventListeners() {
        const deleteCard = this._newCard.querySelector(".elements__delete-button");
        deleteCard.addEventListener("click", () => this._handleDelete());
        this._buttonLike.addEventListener("click", () => {
            this._likeCard();
        });

        const openCard = this._newCard.querySelector('.elements__image')
        openCard.addEventListener('click', () => {
            this._handleOpenPopup();
        })


        this._cardImage.addEventListener("click", () => {
            const currentListElementImage = this._link;
            const currentListElementText = this._name;
            this._newCard.textContent = currentListElementText;
            this._newCard.src = currentListElementImage;
            this._newCard.alt = currentListElementText;
        });
    }


    _likeCard() {
        this._buttonLike.classList.toggle("elements__like-button_active");
    }
}