function PopupWithForm({name, isOpen, onClose, title, buttonText, children}) {
  return (
    <div>
      <div
        className={`popup popup_type_${name} ${
          isOpen ? "popup_open" : ""
        }`}
      >
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            onClick={onClose}
          ></button>
          <h2 className="popup__title">{title}</h2>
          <form name={`popup-${name}-form`} className="popup__form" noValidate>
            {children}
            <button className="popup__save" type="submit">
            {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default PopupWithForm;
