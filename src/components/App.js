import React, { useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm.js";
import { api } from "../utils/Api";
import ImagePopup from "./ImagePopup";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setСards] = React.useState([]);

  useEffect((data) => {
    api
      .getProfile(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((res) => console.log(res));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setСards(res);
      })
      .catch((res) => console.log(res));
  }, []);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          userName={currentUser}
          userDescription={currentUser}
          userAvatar={currentUser}
          cards={cards}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name={"avatar"}
          title={"Обновить аватар"}
          buttonText={"Сохранить"}
        >
          <input
            id="link-avatar"
            type="url"
            className="popup__input popup__input_type_card-link"
            name="link"
            placeholder="Ссылка на картинку"
            required
            autoComplete="off"
          />
          <span
            id="error-link-avatar"
            className="error-message error-message_visible"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name={"edit"}
          title={"Редактировать профиль"}
          buttonText={"Сохранить"}
        >
          <input
            id="name"
            type="text"
            name="name"
            className="popup__input popup__input_type_name"
            required
            utocomplete="off"
            minLength="2"
            maxLength="40"
          />
          <span
            id="error-name"
            className="error-message error-message_visible"
          ></span>
          <input
            id="profession"
            type="text"
            name="info"
            className="popup__input popup__input_type_info"
            required
            utocomplete="off"
            minLength="2"
            maxLength="200"
          />
          <span
            id="error-profession"
            className="error-message error-message_visible"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name={"add-card"}
          title={"Новое место"}
          buttonText={"Сохранить"}
        >
          <input
            id="title"
            type="text"
            className="popup__input popup__input_type_card-name"
            name="name"
            placeholder="Название"
            required
            autoComplete="off"
            minLength="2"
            maxLength="30"
          />
          <span
            id="error-title"
            className="error-message error-message_visible"
          ></span>
          <input
            id="link"
            type="url"
            className="popup__input popup__input_type_card-link"
            name="link"
            placeholder="Ссылка на картинку"
            required
            autoComplete="off"
          />
          <span
            id="error-link"
            className="error-message error-message_visible"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          name={"delete"}
          title={"Вы уверены?"}
          buttonText={"Да"}
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
