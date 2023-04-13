import React from 'react';
import CurrentUserContext from "../contexts/CurrentUserContext"
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';



function App() {

  const [selectedCard, setSelectedCard] = React.useState(null)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  function closeAllPopups() {
    setSelectedCard(null);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  function closeByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  

  return (
    <CurrentUserContext.Provider >

    
      <div className='page'>
        <div className='page__container'>
          <Header />


          <Main 
            onCardClick={handleCardClick} 
            onEditProfile={handleEditProfileClick} 
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
          /> 
            

          <Footer/>

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay} 
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay} 
            onLoading={isLoading}
          />


          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay} 
            name={'edit'}
            form={'profileData'}
            title={'Редактировать профиль'}
            buttonText={'Сохранить'}
            children={(
              <>
                <label className="popup__label" >
                  <input
                    className="popup__input popup__input_name" name="name" placeholder="Имя" required type="text"
                    minLength="2" maxLength="40" id="nameProfile"
                  />
                  <span className="nameProfile-error error"></span>
                </label>
                <label className="popup__label">
                  <input
                    className="popup__input popup__input_job" name="about" placeholder="О себе" required type="text"
                    minLength="2" maxLength="200" id="aboutProfile"
                  />
                  <span className="aboutProfile-error error"></span>
                </label>
              </>
              )}
            />



          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name={'avatar'}
            form={'editAvatarForm'}
            title={'Обновить аватар'}
            buttonText={'Сохранить'}
            children={(
              <>
                <label className="popup__label">
                  <input id="avatar"
                    className="popup__input popup__input_link-avatar"
                    name="avatar" type="url" placeholder="Введите ссылку URL" required
                  />
                  <span className="avatar-error error"></span>
                </label>
              </>
            )}
          />



        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
