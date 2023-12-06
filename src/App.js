
import './App.css';
import Navbar from './Components/Navbar';
import ClientSolutions from './Pages/ClientSolutions';
import Home from './Pages/Home';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CoaderCommunity from './Pages/CoaderCommunity';

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className='bg-gray-200'>
     <Home/>
     <ClientSolutions/>
     <CoaderCommunity/>
    </div>
  );
}

export default App;
