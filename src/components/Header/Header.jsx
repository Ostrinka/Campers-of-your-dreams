import Navigation from "../Navigation/Navigation.jsx";
import css from "./Header.module.css";

export default function Header() {

  return (
    <header className={css.header}>
      <Navigation />      
    </header>
  );
}