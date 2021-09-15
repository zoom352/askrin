import logo from './logo.svg';
import './App.css';
import landscape from './img/landscape.png'
import Lyavochorr from './components/lyavochorr/lyavochorr';
import Chasnochor from './components/chasnochor/chasnochor';
import Kykisvymchorr from './components/kykisvymchorr/kykisvymchorr';
import Fersmana from './components/fersmana/fersmana';
import Udichvymchorr from './components/udichvymchorr/udichvymchorr';
import Tahtarvymchorr from './components/tahtarvymchorr/tahtarvymchorr';
import Vudyavrchorr from './components/vudyavrchorr/vudyavrchorr';
import Aikyivenchorr from './components/aikyivenchorr/aikyivenchorr';
import { Route } from "react-router-dom";
import MountainAikyivPage from './MountainPage/MountainAikyivPage/MountainAikyivPage.js';
import MountainvudyavrchorrPage from './MountainPage/Mountainvudyavrchorr/Mountainvudyavrchorr';
import TahtaPage from './MountainPage/taxtaPage/taxtapage';
import UdicvyPage from './MountainPage/UdicvyPage/UdicvyPage';
import FersmanaPage from './MountainPage/fersmanaPage/fersmanaPage';





function App() {
  return (
    <div className="App">
      <img className='landscape' src={landscape} alt="landscape"/>
      <Lyavochorr/>
      <Chasnochor/>
      <Kykisvymchorr/>
      <Fersmana />
      <Udichvymchorr />
      <Tahtarvymchorr />
      <Vudyavrchorr />
      <Aikyivenchorr />

      <Route path='/Aikyivenchorr'
        render={() => <MountainAikyivPage/>} />

      <Route path='/Vudyavrchorr'
        render={() => <MountainvudyavrchorrPage />} />
      
      <Route path='/Tahtarvymchorr'
        render={() => <TahtaPage />} />
      
      <Route path='/Udichvymchorr'
        render={() => <UdicvyPage/>} />

      <Route path='/fersmana'
        render={() => <FersmanaPage/>} />
    
    </div>
  );
}

export default App;
