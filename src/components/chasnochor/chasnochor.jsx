import chasnochor from "../../img/chasnachor.png";
import s from "./chasnochor.module.css";

const Chasnochor = () => {
  return (
    <div className={s.chasnochor}>
        <img className={s.image} src={chasnochor} alt="chasnochor" />
        <div>
          <button className={s.btn}>часначорр</button>
        </div>
      </div>
  );
};

export default Chasnochor;
