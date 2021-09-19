import { NavLink } from "react-router-dom";
import chasnochor from "../../img/chasnachor.png";
import s from "./chasnochor.module.css";

const Chasnochor = () => {
  return (
    <div className={s.chasnochor}>
        <img className={s.image} src={chasnochor} alt="chasnochor" />
        <div>
          <NavLink to='/Chasnochor'>
            <button className={s.btn}>монблан</button>
          </NavLink>
        </div>
      </div>
  );
};

export default Chasnochor;
