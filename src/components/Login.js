import React, { useState } from 'react';

export default function Login({ handleLogin }) {
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

      handleLogin(password, email);
   }
   return (
      <div className="input">
         <form className="inputForm" onSubmit={handleSubmit}>
            <h1 className="input_title">Вход</h1>
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
               Войти
            </button>
         </form>
      </div>
   );
}
