import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Button type="button" onClick={() => navigate("/catalog")}>
          View Now
        </Button>
      </div>
    </div>
  );
}