import React from 'react';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


function App() {

  const [selectedCard, setSelectedCard] = React.useState(null)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)


  function closeAllPopups() {
    setSelectedCard(null);
    setIsEditProfilePopupOpen(false);
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

  

  return (
      <div className='page'>
        <div className='page__container'>
          <Header />
          <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} />

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay} 
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

        </div>
      </div>
  );
}

export default App;
