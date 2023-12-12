import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mode } from './context/mode';
import Navbar from './Components/Navbar';

// Lazy-loaded components
const HomePage = lazy(() => import('./Pages/LandingPage/HomePage'));
const IotPage = lazy(() => import('./Pages/IOT-Service/IotPage'));
const AiPage = lazy(() => import('./Pages/AI-service/AIPage'));
const MlPage = lazy(() => import('./Pages/ML-service/MlPage'));
const BlockchainPage = lazy(() => import('./Pages/Blockchain-service/BlockchainPage'));

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const { mode } = useContext(Mode);

  return (
    <div className={`w-full ${mode === 'dark' ? 'bg-black' : 'bg-white'} overflow-hidden`}>
      <Router>
        <Navbar />
        <Link to={'/iot'} className='h-screen'>
          Click me
        </Link>
        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path='/iot'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <IotPage />
              </Suspense>
            }
          />
          <Route
            path='/ai'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AiPage />
              </Suspense>
            }
          />
          <Route
            path='/ml'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MlPage />
              </Suspense>
            }
          />
          <Route
            path='/Blockchain'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BlockchainPage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
