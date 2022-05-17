import PopupWithForm from './PopupWithForm';
import { useState, React, useContext, useEffect } from 'react';
import { CurrentUserContext } from './../contexts/CurrentUserContext';
export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');

   const currentUser = useContext(CurrentUserContext);

   function handleSubmit(e) {
      e.preventDefault();
      onUpdateUser({
         name,
         about: description,
      });
   }

   function handleNameChange(event) {
      setName(event.target.value)
   }

   function handleDescriptionChange(event) {
      setDescription(event.target.value)
   } 


   useEffect(() => {
      if (currentUser) {
         setName(currentUser.name);
         setDescription(currentUser.about);
      }
   }, [currentUser, isOpen]);

   return (
      <PopupWithForm
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
         name="name"
         title="Редактировать профиль"
         children={
            <fieldset className="popup__information">
               <input
                  id="name"
                  type="text"
                  className="popup__input popup__input_value_name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  required=""
                  minLength={2}
                  maxLength={40}
               />
               <span id="name-error" className="error" />
               <input
                  id="profession"
                  type="text"
                  className="popup__input popup__input_value_profession"
                  name="about"
                  required=""
                  minLength={2}
                  maxLength={200}
                  value={description}
                  onChange={handleDescriptionChange}
               />
               <span id="profession-error" className="error" />
            </fieldset>
         }
      />
   );
}
