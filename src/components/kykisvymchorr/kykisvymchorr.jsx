import s from "./kykisvymchorr.module.css";
import kykisvymchorr from "../../img/kykisvymchorr.png";


const Kykisvymchorr = () => {

    return (
      <div className={s.kykisvymchorr}>
            <img className={s.image} src={kykisvymchorr} alt="kykisvymchorr" />
            <div>
                <button className={s.btn}>кукисвумчорр</button>
            </div>
      </div>
    );
};

export default Kykisvymchorr;
