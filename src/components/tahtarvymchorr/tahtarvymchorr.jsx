import s from "./tahtarvymchorr.module.css";
import tahtarvymchorr from "../../img/tahtarvymchorr.png";
import { NavLink } from "react-router-dom";

const Tahtarvymchorr = () => {

  return (
    <div className={s.tahtarvymchorr}>
      <img className={s.image} src={tahtarvymchorr} alt="tahtarvymchorr" />
      <div>
        <NavLink to="Tahtarvymchorr">
          <button className={s.btn}>тахтарвумчорр</button>
        </NavLink>
      </div>
    </div>
  );
};


export default Tahtarvymchorr;