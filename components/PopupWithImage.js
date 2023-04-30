import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupContainer) {
        super(popupContainer);
        this._popupCaption = this._popupContainer.querySelector('.popup__image-title');
        this._popupImage = this._popupContainer.querySelector('.popup__image');
    }

    open(name, link) {
        this._popupImage.src = link;
        this._popupCaption.textContent = name;
        this._popupImage.alt = name;
        super.open();
    }
}