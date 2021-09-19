import { NavLink } from "react-router-dom";
import lyavochorr from "../../img/lyavochorr.png";
import s from "./lyavochorr.module.css";

const Lyavochorr = () => {

    return <div className={s.mainlyavochorr}>
        <img className={s.lyavochorr} src={lyavochorr} alt='lyavochorr' />
        <div>
            <NavLink to='Lyavochor'>
               <button className={s.btn}>лявочор</button>
            </NavLink>
        </div>
    </div>
}


export default Lyavochorr;