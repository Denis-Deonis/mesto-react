import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import React from "react";

export default function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');

  React.useEffect(() => {
    if (props.isOpen) {
      setName(currentUser.name);
      setAbout(currentUser.about);
    }
  }, [props.isOpen, currentUser]);

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeAbout(e) {
    setAbout(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateUser({
      name: name,
      about: about,
    })
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onCloseOverlay={props.onCloseOverlay} 
      name={'edit'}
      form={'profileData'}
      title={'Редактировать профиль'}
      buttonText={props.onLoading ? `Сохранение...` : `Сохранить`}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_name"
          name="name"
          placeholder="Имя"
          required
          value={name || ""}
          onChange={handleChangeName}
          type="text"
          minLength="2"
          maxLength="40"
          id="nameProfile"
        />
        <span className="nameProfile-error error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_job"
          name="about"
          placeholder="О себе"
          required
          value={about || ""}
          onChange={handleChangeAbout}
          type="text"
          minLength="2"
          maxLength="200"
          id="aboutProfile"
        />
        <span className="aboutProfile-error error"></span>
      </label>
    </PopupWithForm>
  );
}
