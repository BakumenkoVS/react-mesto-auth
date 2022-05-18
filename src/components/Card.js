import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
   const currentUser = useContext(CurrentUserContext);

   const isOwn = card.owner === currentUser._id;
   const cardDeleteButtonClassName = `card__delete ${
      isOwn ? "card__delete" : "card__delete_hidden"
   }`;

   const isLiked = card.likes.some((i) => i === currentUser._id);
   const cardLikeButtonClassName = `card__heart ${
      isLiked ? "card__heart_active" : "card__heart"
   }`;

   const handleLikeClick = () => {
      onCardLike(card);
   };

   const handleClick = () => {
      onCardClick(card);
   };

   const handleDeleteClick = () => {
      onCardDelete(card);
   };

   return (
      <article className="card">
         <button
            className={cardDeleteButtonClassName}
            type="button"
            onClick={handleDeleteClick}
         />
         <img
            src={card.link}
            alt={card.name}
            className="card__img"
            onClick={handleClick}
         />
         <div className="card__info">
            <h2 className="card__title">{card.name}</h2>
            <div>
               <button
                  className={cardLikeButtonClassName}
                  onClick={handleLikeClick}
                  type="button"
                  aria-label="Лайк"
               />
               <p className="card__likes">{card.likes.length}</p>
            </div>
         </div>
      </article>
   );
}
