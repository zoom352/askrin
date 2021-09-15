import s from "./vudyavrchorr.module.css";
import vudyavrchorr from "../../img/vudyavrchorr.png";
import { NavLink } from "react-router-dom";

const Vudyavrchorr = () => {
  return (
    <div className={s.vudyavrchorr}>
      <img className={s.image} src={vudyavrchorr} alt="vudyavrchorr" />

      <div>
        <NavLink to="Vudyavrchorr">
          <button className={s.btn}>вудъяврчорр</button>
        </NavLink>
      </div>
    </div>
  );
};


{/* <NavLink className={s.test} to="/Vudyavrchorr"></NavLink> */}


export default Vudyavrchorr;