import React from "react";
//import Avatar from '../images/image.jpg';
import ButtonProfile from "../images/Vectori.svg";
import ButtonCard from "../images/Vector+.svg";
import Card from "./Сard";

function Main({
  onEditAvatar,
  userAvatar,
  userName,
  onEditProfile,
  userDescription,
  onAddPlace,
  cards,
  onCardClick,
}) {
  return (
    <main>
      <section className="profile">
        <div className="profile__main">
          <button
            className="profile__button-avatar"
            type="button"
            onClick={onEditAvatar}
          >
            <img
              src={userAvatar.avatar}
              alt="Аватар"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__title">{userName.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            >
              <img src={ButtonProfile} alt="кнопка редактирования профиля" />
            </button>
            <p className="profile__subtitle">{userDescription.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        >
          <img src={ButtonCard} alt="кнопка добавления контента" />
        </button>
      </section>
      <ul className="elements">
        {cards.map((item) => (
          <Card card={item} onCardClick={onCardClick} key={item._id} />
        ))}
      </ul>
    </main>
  );
}
export default Main;
