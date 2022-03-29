import PopupWithForm from "./PopupWithForm";
import { React, useState, useEffect } from "react";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
   const [name, setName] = useState("");
   const [link, setLink] = useState("");

   function handleSubmit(e) {
      e.preventDefault();
      onAddPlace({
         name: name,
         link: link,
      });
   }

   useEffect(() => {
      setName("");
      setLink("");
   }, [isOpen]);

   return (
      <PopupWithForm
         isOpen={isOpen}
         onClose={onClose}
         onSubmit={handleSubmit}
         name="img"
         title="Новое место"
         children={
            <fieldset className="popup__information">
               <input
                  id="mesto"
                  type="text"
                  className="popup__input popup__input_value_mesto"
                  placeholder="Название"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required=""
                  minLength={2}
                  maxLength={30}
               />
               <span id="mesto-error" className="error" />
               <input
                  id="image"
                  type="url"
                  className="popup__input popup__input_value_image"
                  placeholder="Ссылка на картинку"
                  value={link}
                  name="link"
                  onChange={(event) => setLink(event.target.value)}
                  required=""
               />
               <span id="image-error" className="error" />
            </fieldset>
         }
      />
   );
}
