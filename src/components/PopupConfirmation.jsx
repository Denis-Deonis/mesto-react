import PopupWithForm from "./PopupWithForm";

export default function PopupConfirmation(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onCardDelete(props.card)
  }

  return(
    <PopupWithForm 
      isOpen={props.isOpen}   
      onClose={props.onClose}  
      onCloseOverlay={props.onCloseOverlay} 
      buttonText={props.onLoading ? `Удаление...` : `Да`}
      onSubmit={handleSubmit}
      name="popupConfirmation"
      title="Вы уверены?"
    />
  )
}