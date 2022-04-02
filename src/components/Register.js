import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Register({ loggedIn, handleRegister }) {
   const [data, setData] = useState({
      email: '',
      password: '',
   });
   const { email, password } = data;
   function handleChange(e) {
      const { name, value } = e.target;
      setData({
         ...data,
         [name]: value,
      });
   }

   function handleSubmit(e) {
      e.preventDefault();

      handleRegister(password, email);
   }
   return (
      <div className="input">
         <form className="inputForm" onSubmit={handleSubmit}>
            <h1 className="input_title">Регистрация</h1>
            <input
               type="email"
               className="inputForm_input"
               placeholder="Email"
               required
               minLength="2"
               maxLength="40"
               name="email"
               value={email}
               onChange={handleChange}
            />

            <input
               type="password"
               className="inputForm_input"
               placeholder="Пароль"
               required
               minLength="6"
               maxLength="40"
               name="password"
               value={password}
               onChange={handleChange}
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
