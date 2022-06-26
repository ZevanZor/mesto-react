import React, { useEffect } from 'react'
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm.js";
import { api } from '../utils/Api';


function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  useEffect((data) => {
    api.editProfile(data).then(res => {
      console.log('sss',res);
    })
  },[])

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
 };

  function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
  };

  function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true);
  };

  //const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen;

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }

  /*const submitAvatarForm = (data) => {
    api.changeAvatar(data.link)
    .then(res => {
      console.log('resavatar', res)
      //userInfo.setAvatar(res.avatar)
      //popupAvatar.close()
    })
    .catch(console.log)
    .finally(() => {
     // popupAvatar.returnBatton()
    })
    };*/
  return (
    <div className="App">
      <div className="page">
  <Header />
  <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} userName ={currentUser}/>
  <Footer />
  <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
  <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
  <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>


  <template className="elements__template">
    <div className="elements__groups">
      <button type="button" className="elements__delete"></button>
      <img className="elements__image" src="#" alt="#" /> 
      <div classNames="elements__info">
        <h2 cclassName="elements__title"></h2>
      <div className="elements__like-container">
        <button className="elements__like" type="button"></button>
        <span className="elements__like_count"></span>
      </div>
      </div>
    </div>
  </template>

  
  
</div>
    </div>
  );
}

export default App;
