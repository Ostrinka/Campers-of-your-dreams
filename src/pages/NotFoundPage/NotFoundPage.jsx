import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <p className={css.text}>
      Page not found! Please go to
      <Link to="/">
        Home Page
      </Link>
    </p>
  );
}