import Ellipse1 from '../../img/Ellipse1.png'
import Ellipse2 from '../../img/Ellipse2.png'
import Ellipse3 from '../../img/Ellipse3.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Vector3 from '../../img/Vector3.png'
import Vector4 from '../../img/Vector4.png'
import arrow from '../../img/arrow.png'
import s from './elipse.module.css'
import { NavLink } from 'react-router-dom'
import Vector5 from '../../img/Vector5.png'
import Vector6 from '../../img/Vector6.png'
import Vector7 from '../../img/Vector7.png'
import Vector8 from '../../img/Vector8.png'
import { useState } from 'react/cjs/react.development'


const Elipse = ({setOpenscreen, setClosescreen, 
    setCloseElipse, setOpenElipse, elipse, openscreen}) => {

    // const [elipse, setElipse] = useState(true)
    // const [elipse1, setElipse1] = useState(true)



    return <div>
        <div className={s.arrow}>
            <NavLink to='/'>
            <img className={s.podarrow} src={arrow} alt='arrow'/>
            </NavLink>
        </div>
        
        { elipse ? <img onClick={setCloseElipse} className={s.elipseone} src={Ellipse1}/>
         : <img onClick={setOpenElipse} className={s.elipseone} src={Ellipse2}/>}

        { elipse ? <img onClick={setCloseElipse} className={s.elipsetwo} src={Ellipse2}/> 
        : <img onClick={setOpenElipse} className={s.elipsetwo} src={Ellipse1}/>}



         <div onClick={setClosescreen} className={s.openscreen}>
             <img className={s.vector5} src={Vector5} alt='Vector5'/>
             <img className={s.vector6} src={Vector6} alt='Vector6'/>
             <img className={s.vector7} src={Vector7} alt='Vector7'/>
             <img className={s.vector8} src={Vector8} alt='Vector8'/>
         </div>
         {openscreen ?<div onClick={setOpenscreen} className={s.hidescreen}>
            <img className={s.vector3} src={Vector3} 
                alt='Vector3'/>
            <img className={s.vector1} src={Vector1} 
                alt='Vector1'/>
            <img className={s.vector4} src={Vector4} 
                alt='Vector4'/>
            <img className={s.vector2} src={Vector2} 
                alt='Vector2'/>
        </div>: null}
        
    </div>
}


export default Elipse;