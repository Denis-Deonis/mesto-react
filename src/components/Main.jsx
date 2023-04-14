import pen from '../images/profile/pen.svg'

import React from 'react';
import Card from './Card';
import CurrentUserContext from "../contexts/CurrentUserContext"


export default function Main(props) {

  const currentUser = React.useContext(CurrentUserContext)



  return(
    <main className="content">
      <section className="profile">
      <div className="profile__wrapper-relative">
        <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name} />
        <button className="profile__edit-avatar" type="button" onClick={props.onEditAvatar}>
          <img className="profile__edit-pen"  src={pen} alt="изображение письменной ручки" />
        </button>
      </div>
      <div className="profile__info">
        <div className="profile__heading">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" 
            onClick={props.onEditProfile  }
          />
        </div>
        <p className="profile__subtitle">{currentUser.about}</p>
      </div>
      <button className="profile__add-button" type="button" 
        onClick={props.onAddPlace}
      />
    </section>
    <section className="elements">
      <ul className="elements__list">
        { props.cards.map( (card) => (
            <Card
              card={card}
              key={card._id}              
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={props.onCardClick}
            />
          ) )          
        }
      </ul>
    </section>
    </main>
  )
}