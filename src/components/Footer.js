import { Route, Routes } from "react-router-dom";

export default function Footer() {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <footer className="footer">
                  <p className="footer__title">©2021. Бакуменко Владислав</p>
               </footer>
            }
         />
      </Routes>
   );
}
