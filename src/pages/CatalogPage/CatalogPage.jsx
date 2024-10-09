import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCampers } from "../../redux/campers/operations.js";
import Location from "../../components/Location/Location.jsx";
import VehicleEquipment from "../../components/VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../../components/VehicleType/VehicleType.jsx";
import CamperList from "../../components/CamperList/CamperList.jsx";
import Button from "../../components/Button/Button.jsx";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <aside>
        <Location />
        <p>Filters</p>
        <VehicleEquipment />
        <VehicleType />
        <Button className="btn" type="submit">
          Search
        </Button>
      </aside>
      <div className={css.list}>
        <CamperList />
      </div>
    </div>
  );
}
