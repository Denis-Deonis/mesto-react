import React, { useState, useEffect } from 'react';
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupConfirmation from './PopupConfirmation';



function App() {

  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([user, cards]) => {
      setCurrentUser(user);
      setCards(cards);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  function closeAllPopups() {
    setSelectedCard(null);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmationPopupOpen(false);
  }

  function closeByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true)
    api.editProfileUserInfo(newUserInfo)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups()
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => setIsLoading(false))
  }

  function handleUpdateAvatar(newAvatar) {
    setIsLoading(true)
    api.updateProfileAvatar(newAvatar)
      .then((data) => {
        setCurrentUser(data)
        closeAllPopups()
      })
      .catch((error) => console.log(`Ошибка: ${error}`))
      .finally(() => setIsLoading(false))
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />

          <Main
            cards={cards}
            onCardClick={setSelectedCard}
            onEditProfile={setIsEditProfilePopupOpen}
            onAddPlace={setIsAddPlacePopupOpen}
            onEditAvatar={setIsEditAvatarPopupOpen}
            onConfirmationPopup={setIsConfirmationPopupOpen}
          />

          <Footer />

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

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay}
            onUpdateUser={handleUpdateUser}
            onLoading={isLoading}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay}
            onUpdateAvatar={handleUpdateAvatar}
            onLoading={isLoading}
          />

          <PopupConfirmation
            isOpen={isConfirmationPopupOpen}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay}
            onLoading={isLoading}
          />


        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
