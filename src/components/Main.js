import React from 'react';
import Avatar from '../images/image.jpg';
import ButtonProfile from '../images/Vectori.svg';
import ButtonCard from '../images/Vector+.svg';


function Main (props, userAvatar) {
 
  return (
    <main>
    <section className="profile">
      <div className="profile__main">
        <button className="profile__button-avatar" type="button" onClick={props.onEditAvatar}>
        <img src={Avatar} alt="Аватар" className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}/>
      </button>
        <div className="profile__info">
          <h1 className="profile__title">{props.userName.name}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
            <img src={ButtonProfile} alt="кнопка редактирования профиля" />
          </button>
          <p class="profile__subtitle">{props.userDescription}</p>
        </div>
        
      </div>
      <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
        <img src={ButtonCard} alt="кнопка добавления контента" />
      </button>
    </section>
    <section className="elements">
      
    </section>
  </main>

    
  )
}
export default Main;