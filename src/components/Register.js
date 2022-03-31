import { Link } from "react-router-dom";

export default function Register({ loggedIn }) {
   return (
      <div className="input">
         <form className="inputForm">
            <h1 className="input_title">Регистрация</h1>
            <input
               type="email"
               className="inputForm_input"
               placeholder="Email"
               required
               minLength="2"
               maxLength="40"
               name="email"
            />

            <input
               type="password"
               className="inputForm_input"
               placeholder="Пароль"
               required
               minLength="6"
               maxLength="40"
               name="password"
            />
            <button className="inputForm_submit-button" type="submit">
               Зарегистрироваться
            </button>
            <p className="input_subtitle">
               Уже зарегистрированы?
               <Link className="input_link" to="/sign-in">
                  Войти
               </Link>
            </p>
         </form>
      </div>
   );
}
