import avatar from '../images/profile/Avatar.jpg';
import pen from '../images/profile/pen.svg'


export default function Main() {

  return(
    <main className="content">
      <section className="profile">
      <div className="profile__wrapper-relative">
        <img className="profile__avatar" src={avatar} alt="Аватар пользователя" />
        <button className="profile__edit-avatar" type="button">
          <img className="profile__edit-pen" src={pen} alt="изображение письменной ручки" />
        </button>
      </div>
      <div className="profile__info">
        <div className="profile__heading">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
        </div>
        <p className="profile__subtitle">Исследователь океана</p>
      </div>
      <button className="profile__add-button" type="button"></button>
    </section>
    <section className="elements">
      <ul className="elements__list">
      </ul>
    </section>
    </main>
  )
}