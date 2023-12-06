
import './App.css';
import Navbar from './Components/Navbar';
import ClientSolutions from './Pages/ClientSolutions';
import Home from './Pages/Home';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div>
    <Navbar/>
     <Home/>
     <ClientSolutions/>
    </div>
  );
}

export default App;
