
import './App.css';
import ClientSolutions from './Pages/ClientSolutions';
import Home from './Pages/Home';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CoaderCommunity from './Pages/CoaderCommunity';
import Hackathon from './Pages/Hackathon ';
import AboutUs from './Pages/AboutUs';
import ContectUs from './Pages/ContectUs';
import { useContext } from 'react';
import { Mode } from './context/mode';
// import Scroller from './context/Scroller';


function App() {
  gsap.registerPlugin(ScrollTrigger);
  
  const mode = useContext(Mode)
  return (
    // <Scroller>
      <div className={`w-full ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <Home />
        <ClientSolutions />
        <CoaderCommunity />
        <Hackathon />
        <AboutUs />
        <ContectUs />
      </div>
    // </Scroller>
  );
}

export default App;
