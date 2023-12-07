
import './App.css';
import ClientSolutions from './Pages/ClientSolutions';
import Home from './Pages/Home';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CoaderCommunity from './Pages/CoaderCommunity';
import Hackathon from './Pages/Hackathon ';
import AboutUs from './Pages/AboutUs';
import ContectUs from './Pages/ContectUs';

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className='w-full'>
     <Home/>
     <ClientSolutions/>
     <CoaderCommunity/>
     <Hackathon/>
     <AboutUs/>
     <ContectUs/>
    </div>
  );
}

export default App;
