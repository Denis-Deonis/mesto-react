import React from 'react';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';

function App() {

  const [selectedCard, setSelectedCard] = React.useState(null)

  function closeAllPopups() {
    setSelectedCard(null);
  }

  function closeByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
      <div className='page'>
        <div className='page__container'>
          <Header />
          <Main onCardClick={handleCardClick} />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            onCloseOverlay={closeByOverlay} 
          />

        </div>
      </div>
  );
}

export default App;
