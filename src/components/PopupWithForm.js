function PopupWithForm (props) {
  return (
    <div>
      <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_open' : ''}`} >
    <div className="popup__container">
      <button className="popup__close" type="button" onClick={props.onClose}></button>
      <h2 className="popup__title">{props.title}</h2>
      <form name="formProfile" className="popup__form" novalidate>
        <input id="name" type="text" name="name" className="popup__input popup__input_type_name" required utocomplete="off" minlength="2" maxlength="40" />
        <span id="error-name" className="error-message error-message_visible"></span>
        <input id="profession" type="text" name="info" className="popup__input popup__input_type_info" required utocomplete="off" minlength="2" maxlength="200" />
        <span id="error-profession" className="error-message error-message_visible"></span>
        <button className="popup__save" type="submit">Сохранить</button>
      </form>
    </div>
  </div>

   {/* <div className="popup popup_type_edit">
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Редактировать профиль</h2>
      <form name="formProfile" className="popup__form" novalidate>
        <input id="name" type="text" name="name" className="popup__input popup__input_type_name" required utocomplete="off" minlength="2" maxlength="40" />
        <span id="error-name" className="error-message error-message_visible"></span>
        <input id="profession" type="text" name="info" className="popup__input popup__input_type_info" required utocomplete="off" minlength="2" maxlength="200" />
        <span id="error-profession" className="error-message error-message_visible"></span>
        <button className="popup__save" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
  

  <div className="popup popup_type_add-card">
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Новое место</h2>
      <form name="formCard" className="popup__form" novalidate>
        <input id="title" type="text" className="popup__input popup__input_type_card-name" name="name" placeholder="Название" required autocomplete="off" minlength="2" maxlength="30" />
        <span id="error-title" className="error-message error-message_visible"></span>
        <input id="link" type="url" className="popup__input popup__input_type_card-link" name="link" placeholder="Ссылка на картинку" required autocomplete="off" />
        <span id="error-link" className="error-message error-message_visible"></span>
        <button className="popup__save" type="submit">Сохранить</button>
      </form>
    </div>
  </div>

  <section className="popup popup_type_delete">
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
      <form className="popup__form" novalidate>
        <button className="popup__save" type="submit">Да</button>
      </form>
    </div>
  </section>

  <section className="popup popup_type_avatar">
    <div className="popup__container">
      <button className="popup__close" type="button"></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <form name="formCard" className="popup__form" novalidate>
        <input id="link-avatar" type="url" className="popup__input popup__input_type_card-link" name="link" placeholder="Ссылка на картинку" required autocomplete="off" />
        <span id="error-link-avatar" className="error-message error-message_visible"></span>
        <button className="popup__save" type="submit">Сохранить</button>
      </form>
    </div>
  </section>*/}
    </div>
  )
}
export default PopupWithForm;