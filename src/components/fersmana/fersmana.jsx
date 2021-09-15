import s from "./fersmana.module.css";
import fersmana from "../../img/fersmana.png";
import { NavLink } from "react-router-dom";


const Fersmana = () => {

    return (
      <div className={s.fersmana}>
        <img className={s.image} src={fersmana} alt="fersmana" />
        <div>
          <NavLink to="fersmana">
            <button className={s.btn}>ферсмана</button>
          </NavLink>
        </div>
      </div>
    );
}


export default Fersmana;