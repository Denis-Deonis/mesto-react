
export default function PopupWithForm(props) {

  return(
    <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened`: ""}`}  onClick={props.onCloseOverlay} >
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <form className="popup__form" name={props.form} noValidate>
          <fieldset className="popup__content">
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
            <button className="popup__save" type="submit">{props.buttonText}</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}