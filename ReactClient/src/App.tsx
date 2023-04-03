import React, { MouseEvent } from 'react';
import ScaleService from './services/ScaleService';
import ScaleType from './enums/ScaleType';
import Game from './components/Game';
import './styles/App.css';

function App() {
  const scaleService = new ScaleService(ScaleType.Major);
  return (
    <Game scaleSvc={scaleService}/>
  );
}

export default App;
