export default function PopupWithForm({
   name,
   title,
   children,
   isOpen,
   onClose,
   onSubmit,
}) {
   return (
      <div
         className={
            isOpen
               ? `popup popup_type_${name} popup_opened`
               : `popup popup_type_${name}`
         }
      >
         <div className="popup__overlay" onClick={onClose} />
         <div className="popup__container">
            <h2 className="popup__title">{title}</h2>
            <form
               name={name}
               id={`form__${name}`}
               className="popup__form"
               onSubmit={onSubmit}
            >
               <button
                  className="popup__button-close"
                  type="button"
                  onClick={onClose}
               />
               {children}
               <button
                  type="submit"
                  className="popup__button popup__button_type_name"
               >
                  Сохранить
               </button>
            </form>
         </div>
      </div>
   );
}
