export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  //Selector карточки
  _getTemplateCard() {
    const card = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return card;
  }

  //Selector элементов
  _setData() {
    this._newCard.querySelector(".elements__image").src = this._link;
    this._newCard.querySelector(".elements__image").alt = this._name;
    this._newCard.querySelector(".elements__title").textContent = this._name;
  }

  _handleOpenPopup() {
    this._handleCardClick(this._name, this._link);
  }

  _handleDelete() {
    this._newCard.remove();
  }

  _setEventListeners() {
    const deleteCard = this._newCard.querySelector(".elements__delete-button");
    deleteCard.addEventListener("click", () => this._handleDelete());
    this._buttonLike.addEventListener("click", () => {
      this._likeCard();
    });

    const openCard = this._newCard.querySelector(".elements__image");
    openCard.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _likeCard() {
    this._buttonLike.classList.toggle("elements__like-button_active");
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._buttonLike = this._newCard.querySelector(".elements__like-button");
    this._cardImage = this._newCard.querySelector(".elements__image");
    this._setEventListeners();
    this._setData();
    return this._newCard;
  }
}
