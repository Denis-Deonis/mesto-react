import React from 'react';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';


function App() {

  const [selectedCard, setSelectedCard] = React.useState(null)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

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
      <div className='page'>
        <div className='page__container'>
          <Header />

          <Routes>
            <Route path="/" element={          
              <Main 
                onCardClick={handleCardClick} 
                onEditProfile={handleEditProfileClick} 
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
              /> } 
            />
          </Routes>


          <Footer/>

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

            <PopupWithForm
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onCloseOverlay={closeByOverlay} 
              name={'add'}
              form={'newCard'}
              title={'Новое место'}
              buttonText={'Создать'}
              children={(
                <>
                  <label className="popup__label" >
                    <input
                      className="popup__input popup__input_type_title"
                      name="name" placeholder="Название" required type="text"
                      minLength="2" maxLength="30" id="title"
                    />
                    <span className="title-error error"></span>
                  </label>
                  <label className="popup__label">
                    <input
                      className="popup__input popup__input_type_image-link"
                      name="link" type="url" placeholder="Ссылка на картинку" required
                      id="link"
                    />
                    <span className="link-error error"></span>
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
  );
}

export default App;
