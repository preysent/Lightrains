
import './App.css';
import ClientSolutions from './Pages/ClientSolutions';
import Home from './Pages/Home';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CoaderCommunity from './Pages/CoaderCommunity';

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className='w-full'>
     <Home/>
     <ClientSolutions/>
     <CoaderCommunity/>
    </div>
  );
}

export default App;
