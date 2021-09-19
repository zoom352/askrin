import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import traingle from '../../img/traingle.png'
import traingleEmpty from '../../img/traingleEmpty.png'
import s from './traingle.module.css'


const Traingle = () => {

    // const [train, setTrain] = useState(true)
    // const [train1, setTrain1] = useState(true)
    // const [train2, setTrain2] = useState(true)
    // const [train3, setTrain3] = useState(true)
    // const [train4, setTrain4] = useState(true)
    // const [train5, setTrain5] = useState(true)
    // const [train6, setTrain6] = useState(true)
    // const [train7, setTrain7] = useState(true)
    

    return <div>
<NavLink to='/Lyavochor'> 
     {/* <img className={s.traingleHhiest} 
    src={traingle} alt='traingle'/>   */}
     <img  className={s.traingleHhiest} 
    src={traingleEmpty} alt='traingleEmpty'/>
     {/* <img className={s.traingle}
    src={traingle} alt='traingle'/>  */}
    <img className={s.traingle}
    src={traingleEmpty} alt='traingleEmpty'/>
</NavLink>


<NavLink to='/Chasnochor'>
 <img className={s.traingleEmptyHhiest} 
    src={traingleEmpty} alt='traingleEmpty'/> 
{/* <img className={s.traingleEmptyHhiest} 
    src={traingle} alt='traingleEmpty'/> */}

<img className={s.traingleEmpty} 
    src={traingleEmpty} alt='traingleEmpty'/>
{/* <img className={s.traingleEmpty} 
    src={traingle} alt='traingleEmpty'/> */}
</NavLink>


<NavLink to='/fersmana'>
<img className={s.traingleEmptyHhiest1} 
    src={traingleEmpty} alt='traingleEmpty'/> 
{/* <img className={s.traingleEmptyHhiest1} 
    src={traingle} alt='traingle'/> */}
<img className={s.traingleEmpty1} 
    src={traingleEmpty} alt='traingleEmpty'/>
{/* <img className={s.traingleEmpty1} 
    src={traingle} alt='traingle'/> */}
</NavLink>


<NavLink to='Udichvymchorr'>
<img className={s.traingleEmptyHhiest2} 
    src={traingleEmpty} alt='traingleEmpty'/>
    {/* <img className={s.traingleEmptyHhiest2} 
    src={traingle} alt='traingle'/> */}
<img className={s.traingleEmpty2} 
    src={traingleEmpty} alt='traingleEmpty'/>
    {/* <img className={s.traingleEmpty2} 
    src={traingle} alt='traingle'/> */}
</NavLink>


<NavLink to='/Coocki'>
{/* <img className={s.traingleEmptyHhiest3} 
    src={traingleEmpty} alt='traingleEmpty'/> */}
    <img className={s.traingleEmptyHhiest3} 
    src={traingle} alt='traingleEmpty'/>
{/* <img className={s.traingleEmpty3} 
    src={traingleEmpty} alt='traingleEmpty'/> */}
    <img className={s.traingleEmpty3} 
    src={traingle} alt='traingleEmpty'/>
</NavLink>


<NavLink to='/Tahtarvymchorr'>
<img className={s.traingleEmptyHhiest4} 
    src={traingleEmpty} alt='traingleEmpty'/> 
    {/* <img className={s.traingleEmptyHhiest4} 
    src={traingle} alt='traingle'/> */}
<img className={s.traingleEmpty4} 
    src={traingleEmpty} alt='traingleEmpty'/> 
    {/* <img className={s.traingleEmpty4} 
    src={traingle} alt='traingle'/> */}
</NavLink>


<NavLink to='/Vudyavrchorr'>
<img className={s.traingleEmptyHhiest5} 
    src={traingleEmpty} alt='traingleEmpty'/> 
    {/* <img className={s.traingleEmptyHhiest5} 
    src={traingle} alt='traingle'/> */}
<img className={s.traingleEmpty5} 
    src={traingleEmpty} alt='traingleEmpty'/> 
    {/* <img className={s.traingleEmpty5} 
    src={traingle} alt='traingle'/> */}
</NavLink>


<NavLink to='/Aikyivenchorr'>
<img className={s.traingleEmptyHhiest6} 
    src={traingleEmpty} alt='traingleEmpty'/>
    {/* <img className={s.traingleEmptyHhiest6} 
    src={traingle} alt='traingle'/> */}
<img className={s.traingleEmpty6} 
    src={traingleEmpty} alt='traingleEmpty'/> 
    {/* <img className={s.traingleEmpty6} 
    src={traingle} alt='traingle'/> */}
</NavLink>
    
    </div>
}


export default Traingle;