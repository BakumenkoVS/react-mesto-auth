import { Navigate } from 'react-router-dom';

export default function Login({ loggedIn }) {
   return loggedIn ? (
      <Navigate to="/" />
   ) : (
      <h1>
         <p>Привет</p>
      </h1>
   );
}
