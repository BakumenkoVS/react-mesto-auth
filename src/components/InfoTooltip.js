export default function InfoTooltip({ onClose, isOpen, children }) {
   return (
      <div
         className={
            isOpen
               ? `popup popup_type_info popup_opened`
               : `popup popup_type_info`
         }
      >
         <div className="popup__overlay" onClick={onClose} />
         <div className="popup__container popup__container_info">
            {children}
            <button
               className="popup__button-close"
               type="button"
               onClick={onClose}
            />
         </div>
      </div>
   );
}
