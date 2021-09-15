import lyavochorr from "../../img/lyavochorr.png";
import s from "./lyavochorr.module.css";

const Lyavochorr = () => {

    return <div className={s.mainlyavochorr}>
        <img className={s.lyavochorr} src={lyavochorr} alt='lyavochorr' />
        <div>
            <button className={s.btn}>лявочор</button>
        </div>
    </div>
}


export default Lyavochorr;