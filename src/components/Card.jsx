
export default function Card(props) {

  function handleCardClick(){
    props.onCardClick(props.card)
  }

  return(
    <li className="element">
      <button className="element__trash"></button>
      <img className="element__image" onClick={handleCardClick}  src={props.link} alt={props.name} />
      <div className="element__group">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__container-like">
          <button className="element__like-button" type="button" aria-label="Лайк"></button>
          <p className="element__count-like">{props.likes}</p>
        </div>
      </div>
    </li>
  )
} 