import s from '../coockiPage/coockiPage.module.css'
import chasnaPage from '../../img/chasnaPage.png'
import Elipse from '../../components/elipse/elipse';
import traingle from '../../img/traingle.png'
import traingleEmpty from '../../img/traingleEmpty.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import ckokiPage from '../../img/ckokiPage.png'

const ChasnochorPageMount = () => {

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
            <h1 className={s.wraph}>монблан</h1>
        <p className={s.text}>Монбла́н (итал. Monte Bianco di Courmayeur) (фр. Mont Blanc и итал. Monte Bianco) — «белая гора», 
        вершина в одноимённом массиве, возвышается над озером Леман в Альпах. Это самая высокая точка Альп, достигает высоты 4810 м 
        над уровнем моря. Самая высокая гора в Европе, если не считать Кавказские горы частью Европы. Находится на границе Италии и Франции. С вершины Монблана в ясный день видны горные хребты Юра, Вогезы, Шварцвальд и Центральный массив, а также основные вершины Альп. В Италии ближайший город Курмайёр, (область Валле-д’Аоста), а во Франции — Шамони (департамент Верхняя Савойя). 
        В 1965 году под горой построен 11-километровый туннель, соединяющий две страны. Ежедневно по нему проезжают до 5000 автомобилей
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
 {/* <img className={s.traingleEmptyHhiest} 
    src={traingleEmpty} alt='traingleEmpty'/>  */}
<img className={s.traingleEmptyHhiest} 
    src={traingle} alt='traingleEmpty'/>
{/* <img className={s.traingleEmpty} 
    src={traingleEmpty} alt='traingleEmpty'/> */}
<img className={s.traingleEmpty} 
    src={traingle} alt='traingleEmpty'/>
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

</div>: null}
        
        {elipse ? <img className={s.image} src={chasnaPage} 
            alt='chasnaPage'/>: <img className={s.image} src={ckokiPage} />}
    </div>
}


export default ChasnochorPageMount;