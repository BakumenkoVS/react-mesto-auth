import logo from "../images/logo.svg";
import { Link, Route, Routes } from "react-router-dom";
export default function Header() {
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
                  <Link className="header_link" to="/sign-in">
                     Выход
                  </Link>
               }
            />
         </Routes>
      </header>
   );
}
