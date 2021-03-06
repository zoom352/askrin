import MounTahtaPage from './../../img/MounTahtaPage.png'
import s from '../coockiPage/coockiPage.module.css'
import Elipse from '../../components/elipse/elipse';
import traingle from '../../img/traingle.png'
import traingleEmpty from '../../img/traingleEmpty.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import Mountainvudyavrchorr from '../../img/Mountainvudyavrchorr.png'

const TahtaPage = () => {

    const [openscreen, setOpenscreen] = useState(true)
    const [elipse, setElipse] = useState(true)

    return <div className={s.main}>
         <div className={s.elipse}>
            <Elipse 
               openscreen={openscreen}
               setClosescreen={() => setOpenscreen(true)} 
               setOpenscreen={() => setOpenscreen(false)}
               setCloseElipse={() => setElipse(false)}
               setOpenElipse={() => setElipse(true)}
               elipse={elipse}/>
        </div>
        
        {openscreen ? <div className={s.content}>
            <h1 className={s.wraph}>Джомолунгма</h1>
        <p className={s.text}>Вершина находится в Гималаях в хребте Махалангур-Химал, по которому проходит граница Непала и Тибетского автономного района (Китай).
Эверест имеет форму трёхгранной пирамиды, южный склон более крутой. На южном склоне и рёбрах снег и фирн не удерживаются, вследствие чего они обнажены. Высота Северо-восточного плеча — 8393 м. Высота от подножия до вершины — около 3550 м. Вершина состоит в основном из осадочных отложений.
С юга Эверест соединяется перевалом Южное седло (7906 м) с Лхоцзе (8516 м), называемой иногда Южной вершиной. С севера круто спадающее остро заточенное Северное седло (7020 м) соединяет Эверест с Северной вершиной — Чангзе (7553 м). На восток круто обрывается непроходимая восточная стена Кангшунг (3350 м). С массива во все стороны стекают ледники, оканчивающиеся на высоте около 5000 м
</p>


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
<img className={s.traingleEmptyHhiest3} 
    src={traingleEmpty} alt='traingleEmpty'/>
    {/* <img className={s.traingleEmptyHhiest3} 
    src={traingle} alt='traingleEmpty'/> */}
<img className={s.traingleEmpty3} 
    src={traingleEmpty} alt='traingleEmpty'/>
    {/* <img className={s.traingleEmpty3} 
    src={traingle} alt='traingleEmpty'/> */}
</NavLink>


<NavLink to='/Tahtarvymchorr'>
{/* <img className={s.traingleEmptyHhiest4} 
    src={traingleEmpty} alt='traingleEmpty'/>  */}
    <img className={s.traingleEmptyHhiest4} 
    src={traingle} alt='traingle'/>
{/* <img className={s.traingleEmpty4} 
    src={traingleEmpty} alt='traingleEmpty'/>  */}
    <img className={s.traingleEmpty4} 
    src={traingle} alt='traingle'/>
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


</div>: null}
        {elipse ? <img className={s.image} src={MounTahtaPage} 
        alt='MounTahtaPage'/> : <img className={s.image} src={Mountainvudyavrchorr} alt='Mountainvudyavrchorr'/>}
    </div>
}


export default TahtaPage;