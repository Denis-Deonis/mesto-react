import pen from '../images/profile/pen.svg'

import React, {useEffect, useState} from 'react';
import api from "../utils/api";
import Card from './Card';


export default function Main(props) {

  const [userInfo, setUserInfo] = useState({});
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
      setUserInfo(profileInfo)
      setCards(card)
    }).catch((err) => {
      console.error(err);
    })
  }, [])


  return(
    <main className="content">
      <section className="profile">
      <div className="profile__wrapper-relative">
        <img className="profile__avatar" src={userInfo.avatar} alt={userInfo.name} />
        <button className="profile__edit-avatar" type="button">
          <img className="profile__edit-pen" src={pen} alt="изображение письменной ручки" />
        </button>
      </div>
      <div className="profile__info">
        <div className="profile__heading">
          <h1 className="profile__title">{userInfo.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать" 
            //onClick={props.onEditProfile}
          ></button>
        </div>
        <p className="profile__subtitle">{userInfo.about}</p>
      </div>
      <button className="profile__add-button" type="button" 
      //onClick={props.onAddPlace}
      ></button>
    </section>
    <section className="elements">
      <ul className="elements__list">
        { cards.map( (card, id) => (
            <Card
              key={id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
            />
          ) )          
        }
      </ul>
    </section>
    </main>
  )
}