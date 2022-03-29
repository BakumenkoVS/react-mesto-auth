import PopupWithForm from './PopupWithForm';
import { React, useRef, useEffect } from 'react';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
   const avatarRef = useRef();

   function handleSubmit(e) {
      e.preventDefault();

      onUpdateAvatar({
         avatar: avatarRef.current.value,
      });
   }

   useEffect(() => {
      avatarRef.current.value = '';
   }, [isOpen]);

   return (
      <PopupWithForm
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
         name="avatar"
         title="Обновить аватар"
         children={
            <fieldset className="popup__information">
               <input
                  ref={avatarRef}
                  id="avatar"
                  type="url"
                  className="popup__input popup__input_value_avatar"
                  placeholder="Ссылка на картинку"
                  defaultValue=""
                  name="avatar"
                  required=""
               />
               <span id="avatar-error" className="error" />
            </fieldset>
         }
      />
   );
}
