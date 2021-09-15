import s from "./aikyivenchorr.module.css";
import aikyivenchorr from "../../img/aikyivenchorr.png";
import  {NavLink}  from "react-router-dom";


const Aikyivenchorr = () => {
  return (
    <div className={s.aikyivenchorr}>
      <img className={s.image} src={aikyivenchorr} alt="aikyivenchorr" />
      <div>
         <NavLink to="/aikyivenchorr">
        <button className={s.btn}>
          айкуайвенчорр
        </button>
        </NavLink>
      </div>
    </div>
  );
};


export default Aikyivenchorr;