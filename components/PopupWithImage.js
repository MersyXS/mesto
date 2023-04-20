import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupContainer) {
        super(popupContainer);
        this._popupImage = this._popupContainer.querySelector('.popup__image');
        this._popupName = this._popupContainer.querySelector('.popup__image-title');
    }

    open(name, link) {
        this._popupImage.src = link;
        this._popupName.textContent = name;
        this._popupImage.alt = name;
        super.open();
    }
}