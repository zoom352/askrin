import fersmPage from './../../img/fersmPage.png'
import s from '../coockiPage/coockiPage.module.css'
import Elipse from '../../components/elipse/elipse';
import traingle from '../../img/traingle.png'
import traingleEmpty from '../../img/traingleEmpty.png'
import { NavLink } from 'react-router-dom';
import lyavoPage from '../../img/lyavoPage.png'
import { useState } from 'react/cjs/react.development';

const FersmanaPage = () => {

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
        
        {openscreen ?<div className={s.content}>
            <h1 className={s.wraph}>кавказ</h1>
        <p className={s.text}>географический регион, преимущественно горная страна в Евразии, расположенный к югу от Восточно-Европейской равнины, на границе Европы и Азии, который охватывает территории России, Грузии, Азербайджана и Армении[2], ряда непризнанных и частично признанных государств[3]. Ограничен Чёрным морем с запада, Каспийским морем с востока.
Северная граница Кавказа проходит по Кумо-Манычской впадине, Азовскому морю и Керченскому проливу[4][5].
Южная граница Кавказа проходит по бывшей государственной границе СССР (ныне южные границы Грузии, Армении и Азербайджана c Турцией и Ираном)[6]. Площади закавказских государств, а также российских Северо-Кавказского федерального округа, Краснодарского края и Республики Адыгея вместе равны 440 тыс. км²
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
{/* <img className={s.traingleEmptyHhiest1} 
    src={traingleEmpty} alt='traingleEmpty'/>  */}
<img className={s.traingleEmptyHhiest1} 
    src={traingle} alt='traingle'/>
{/* <img className={s.traingleEmpty1} 
    src={traingleEmpty} alt='traingleEmpty'/> */}
<img className={s.traingleEmpty1} 
    src={traingle} alt='traingle'/>
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

        { elipse ?<img className={s.image} src={fersmPage}
         alt='fersmPage'/> : <img className={s.image} src={lyavoPage} 
         alt='lyavoPage'/>}
    </div>
}


export default FersmanaPage;