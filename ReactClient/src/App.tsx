import React from 'react';
import ScaleService from './services/ScaleService';
import GameService from './services/GameService';
import Game from './components/Game';
import Footer from './components/Footer';
import './styles/App.css';
import { GameServiceProvider } from './contexts/GameServiceContext';
import { ScaleServiceProvider } from './contexts/ScaleServiceContext';

function App() {
  const gameSvc = new GameService();
  const scaleSvc = new ScaleService();
  return (
    <div className='app-container'>
      <GameServiceProvider gameService={gameSvc}>
        <ScaleServiceProvider scaleService={scaleSvc}>
          <Game />
        </ScaleServiceProvider>  
      </GameServiceProvider> 

      <Footer />
    </div>  
  );
}

export default App;
