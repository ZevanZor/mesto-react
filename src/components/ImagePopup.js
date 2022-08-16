function ImagePopup (props) {


  return (
    <div className={props.card.name ? "popup popup_type_image popup_open" : "popup popup_type_image"}>
    <div className="popup__image">
      <button type="button" className="popup__close" onClick={props.onClose}></button>
      <img className="popup__image-card" src={props.card.link} alt="фото модальное окно" />
      <h2 className="popup__image-title">{props.card.name}</h2>
    </div>
  </div>
  )
}

export default ImagePopup;