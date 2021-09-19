import s from "./kykisvymchorr.module.css";
import kykisvymchorr from "../../img/kykisvymchorr.png";
import { NavLink } from "react-router-dom";


const Kykisvymchorr = () => {

    return (
      <div className={s.kykisvymchorr}>
            <img className={s.image} src={kykisvymchorr} alt="kykisvymchorr" />
            <div>
              <NavLink to='/Coocki'>
                <button className={s.btn}>кукисвумчорр</button>
              </NavLink>
            </div>
      </div>
    );
};


export default Kykisvymchorr;
