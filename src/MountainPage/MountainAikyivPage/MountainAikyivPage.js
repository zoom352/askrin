import mountainAikyivimg from './../../img/MountainAikyiv.png'
import s from '../coockiPage/coockiPage.module.css'
import Elipse from '../../components/elipse/elipse';
import traingle from '../../img/traingle.png'
import traingleEmpty from '../../img/traingleEmpty.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import chasnaPage from '../../img/chasnaPage.png'

const MountainAikyivPage = () => {

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
            <h1 className={s.wraph}>анды</h1>
        <p className={s.text}>одна из самых длинных (9000 км)[1] и одна из самых высоких (гора Аконкагуа, 6961 м)[2] горных систем Земли, окаймляющая с севера и запада всю Южную Америку; южная часть Кордильер. Местами Анды достигают ширины свыше 500 км (наибольшая ширина — до 750 км — в Центральных Андах, между 18° и 20° ю. ш.)[3]. Средняя высота — около 4000 м.

Анды являются крупным межокеанским водоразделом; к востоку от Анд текут реки бассейна Атлантического океана (в Андах берут начало сама Амазонка и многие её крупные притоки, а также притоки Ориноко, Парагвая, Параны, река Магдалена и реки Патагонии), к западу — реки бассейна Тихого океана (преимущественно короткие).

Анды служат важнейшим в Южной Америке климатическим барьером, изолирующим территории к западу от Главной Кордильеры от влияния Атлантического океана, к востоку — от влияния Тихого океана. Горы лежат в 5 климатических поясах (экваториальном, субэкваториальном, тропическом, субтропическом и умеренном) и отличаются (особенно в центральной части) резкими контрастами в увлажнении восточных (подветренных) и западных (наветренных) склонов.

В силу значительной протяжённости Анд отдельные их ландшафтные части значительно отличаются друг от друга. По характеру рельефа и другим природным отличиям, как правило, выделяют три основных региона — Северные, Центральные и Южные Анды.

Анды протянулись через территории семи государств Южной Америки — Венесуэлы, Колумбии, Эквадора, Перу, Боливии, Чили и Аргентины
</p>

    <NavLink to='/Lyavochor'> 
      <img  className={s.traingleHhiest} 
      src={traingleEmpty} alt='traingleEmpty'/>
      <img className={s.traingle}
      src={traingleEmpty} alt='traingleEmpty'/>
    </NavLink>

     
    <NavLink to='/Chasnochor'>
    <img className={s.traingleEmptyHhiest} 
    src={traingleEmpty} alt='traingleEmpty'/> 
    <img className={s.traingleEmpty} 
    src={traingleEmpty} alt='traingleEmpty'/>
    </NavLink>


<NavLink to='/fersmana'>
<img className={s.traingleEmptyHhiest1} 
    src={traingleEmpty} alt='traingleEmpty'/> 
<img className={s.traingleEmpty1} 
    src={traingleEmpty} alt='traingleEmpty'/>
</NavLink>


<NavLink to='Udichvymchorr'>
<img className={s.traingleEmptyHhiest2} 
    src={traingleEmpty} alt='traingleEmpty'/>
<img className={s.traingleEmpty2} 
    src={traingleEmpty} alt='traingleEmpty'/>
</NavLink>


<NavLink to='/Coocki'>
<img className={s.traingleEmptyHhiest3} 
    src={traingleEmpty} alt='traingleEmpty'/>
<img className={s.traingleEmpty3} 
    src={traingleEmpty} alt='traingleEmpty'/>
</NavLink>


<NavLink to='/Tahtarvymchorr'>
<img className={s.traingleEmptyHhiest4} 
    src={traingleEmpty} alt='traingleEmpty'/> 
<img className={s.traingleEmpty4} 
    src={traingleEmpty} alt='traingleEmpty'/> 
</NavLink>


<NavLink to='/Vudyavrchorr'>
<img className={s.traingleEmptyHhiest5} 
    src={traingleEmpty} alt='traingleEmpty'/> 
<img className={s.traingleEmpty5} 
    src={traingleEmpty} alt='traingleEmpty'/> 
</NavLink>



<NavLink to='/Aikyivenchorr'>
    <img className={s.traingleEmptyHhiest6} 
    src={traingle} alt='traingle'/>
    <img className={s.traingleEmpty6} 
    src={traingle} alt='traingle'/>
</NavLink>


</div>: null}

        {elipse ? <img className={s.image} src={mountainAikyivimg} 
        alt='mountainAikyivimg'/> : <img className={s.image} src={chasnaPage} 
        alt='chasnaPage'/>}
    </div>
}


export default MountainAikyivPage;