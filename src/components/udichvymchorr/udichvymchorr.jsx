import s from "./udichvymchorr.module.css";
import udichvymchorr from "../../img/udichvymchorr.png";
import { NavLink } from "react-router-dom";


const Udichvymchorr = () => {
  
  return (
    <div className={s.udichvymchorr}>
      <img className={s.image} src={udichvymchorr} alt="udichvymchorr" />
      <div className={s.dav}>
        <NavLink to="Udichvymchorr">
          <button className={s.btn}>юдычвумчор</button>
        </NavLink>
      </div>
    </div>
  );
};


export default Udichvymchorr;