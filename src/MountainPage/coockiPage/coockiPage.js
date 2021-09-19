import s from './coockiPage.module.css'
import ckokiPage from '../../img/ckokiPage.png'
import Traingle from '../../components/traingle/traingle'
import Elipse from '../../components/elipse/elipse'
import traingle from '../../img/traingle.png'
import traingleEmpty from '../../img/traingleEmpty.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react/cjs/react.development'
import fersmPage from './../../img/fersmPage.png'

const CoockiPageMount = () => {

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
            <h1 className={s.wraph}>кукисвумчорр</h1>
        <p className={s.text}>Откуда пошло название «Хибины»? Считается, что от слова «хибень», бытовавшего среди народов Кольской земли и означавшего «горная возвышенность, плоскогорье». В свою очередь, оно было заимствовано из финского языка, где означает «небольшой холм». 
Саамы, коренные жители Кольского севера, Хибинами считали Умбозерский массив, который называли Умптек — «Закрытые горы», и Ловозерский — Луяврурт.
 У кольских саамов основных языковых диалектов было пять, которые так отличались между собой, что люди с трудом понимали друг друга. Поэтому значения некоторых рассмотренных нами топонимов могут иметь иное толкование в других источниках. Однако большинство названий на карте Хибин относятся к кильдинскому диалекту саамского языка — самому распространённому в этой части полуострова. К тому же народ Лапландии долгое время не имел письменности, все слова передавались «из уст в уста», поэтому постепенно искажались, как в игре «испорченный телефон». 
Первая подробная географическая карта Хибин (будем называть её «картой Рамзая») составлена участниками финской экспедиции, и все названия записаны при помощи латинских букв. С 1920 года, в «ферсмановский» период изучения Хибин, карта Рамзая была «переведена», исправлена и дополнена. Часть топонимов придумали Александр Евгеньевич Ферсман и его команда, стараясь использовать корни саамских слов. Но всё же и русские, и финские исследователи записывали саамскую речь на слух, а она не всегда правильно транскрибируется при помощи кириллицы или латинского алфавита. Можно проследить, как искажались и менялись многие топонимы — даже русские! — на географических и туристических картах, изданных в XX–XXI веках. Обратимся к саамским правилам «словосоставления». Обычно названия давались реке или долине, а затем — горному хребту этой долины. В таких словах первый корень 
— это характеристика объекта (длинный, скалистый, облачный и т. д.), а второй — его определение (гора, озеро и т. п.).
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

</div>: null}

        {elipse ? <img className={s.image} src={ckokiPage} 
             alt='ckokiPage'/> : <img className={s.image} src={fersmPage} alt='fersmPage'/>}
    </div>
}


export default CoockiPageMount;