import logo from '../images/logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
export default function Header({ signOut, userInfo }) {
   return (
      <header className="header">
         <img src={logo} alt="Места России" className="logo" />
         <Routes>
            <Route
               path="sign-up"
               element={
                  <Link className="header_link" to="/sign-in">
                     Войти
                  </Link>
               }
            />
            <Route
               path="sign-in"
               element={
                  <Link className="header_link" to="/sign-up">
                     Регистрация
                  </Link>
               }
            />

            <Route
               path="/"
               element={
                  <div>
                     <span className="header_email">{userInfo}</span>
                     <Link
                        className="header_link"
                        to="/sign-in"
                        onClick={signOut}
                     >
                        Выход
                     </Link>
                  </div>
               }
            />
         </Routes>
      </header>
   );
}
