import logo from "../images/logo.svg";

export default function Header() {
   return (
      <header className="header">
         <img src={logo} alt="Места России" className="logo" />
      </header>
   );
}
