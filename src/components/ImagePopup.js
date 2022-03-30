export default function ImagePopup({ onClose, card }) {
   return (
      <div
         className={`popup popup_type_picture ${card && "popup_opened"}`}
         id="img"
      >
         <div className="popup__overlay" onClick={onClose} />
         <div className="popup__content">
            <button
               className="popup__button-close"
               type="button"
               onClick={onClose}
            />
            <img
               src={card?.link}
               alt={card?.name}
               className="popup__picture-img"
            />
            <p className="popup__subtitle">{card?.name}</p>
         </div>
      </div>
   );
}
