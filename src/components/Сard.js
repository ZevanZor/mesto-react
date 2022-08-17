import React from 'react';

function Card ({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  } 

  return (
    
          <li className="elements__groups">
            <button type="button" className="elements__delete"></button>
            <img className="elements__image" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="elements__info">
              <h2 className="elements__title">{card.name}</h2>
              <div className="elements__like-container">
                <button className="elements__like" type="button"></button>
                <span className="elements__like_count">{card.likes.length}</span>
              </div>
            </div>
          </li>
        
  )
}

export default Card;