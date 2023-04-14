import PopupWithForm from './PopupWithForm';
import {useState, useEffect} from "react";

export default function AddPlacePopup(props) {

  const [placeName, setPlaceName] = useState("");
  const [placeLink, setPlaceLink] = useState("");

  useEffect( ()=> {
    setPlaceName("");
    setPlaceLink("");
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
        name: placeName,
        link: placeLink,
    });
}

function handleChangePlaceName(e) {
    setPlaceName(e.target.value);
}

function handleChangePlaceLink(e) {
    setPlaceLink(e.target.value);
}

  return(
    <PopupWithForm 
      isOpen={props.isOpen}
      onClose={props.onClose}
      onCloseOverlay={props.onCloseOverlay} 
      onSubmit={handleSubmit}
      name={'add'}
      form={'newCard'}
      title={'Новое место'}
      buttonText={props.onLoading ? `Сохранение` : `Создать`}
    >
      <label className="popup__label" >
        <input
          className="popup__input popup__input_type_title"
          name="name" placeholder="Название" required type="text"
          minLength="2" maxLength="30" id="title"
          value={placeName}  onChange={handleChangePlaceName}
        />
      <span className="title-error error"></span>
      </label>
      <label className="popup__label">
        <input
        className="popup__input popup__input_type_image-link"
        name="link" type="url" placeholder="Ссылка на картинку" required
        id="link" value={placeLink} onChange={handleChangePlaceLink}
        />
        <span className="link-error error"></span>
      </label>
    </PopupWithForm>
  )
}