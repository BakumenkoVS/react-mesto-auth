import React, { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({
   onEditAvatar,
   onEditProfile,
   onAddPlace,
   onCardClick,
   onCardDelete,
   onCardLike,
   onCards,
}) {
   const currentUser = useContext(CurrentUserContext);
   const items = () => {
      return onCards.map((card) => (
         <Card
            card={card}
            key={`card${card._id}`}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
         />
      ));
   };

   return (
      <main className="content">
         <section className="profile">
            <div className="profile__avatar-container">
               <img
                  src={currentUser?.avatar}
                  alt="Фото человека"
                  className="profile__avatar"
               />
               <div
                  className="profile__avatar-overlay"
                  onClick={onEditAvatar}
               />
            </div>
            <div className="profile__card">
               <div className="profile__information">
                  <h1 className="profile__title">{currentUser?.name}</h1>
                  <button
                     className="profile__edit"
                     type="button"
                     onClick={onEditProfile}
                  />
               </div>
               <p className="profile__subtitle">{currentUser?.about}</p>
            </div>
            <button
               type="button"
               className="profile__button"
               onClick={onAddPlace}
            />
         </section>
         <section className="elements">{items()}</section>
      </main>
   );
}
