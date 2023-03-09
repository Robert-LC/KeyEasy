import React, { MouseEvent } from 'react';
import { notes } from './helpers';
import Piano from './Piano';
import './App.css';

function App() {

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value)
  }

  return( 
    <div>
        <Piano notes={notes} />
    </div>
  );
}

export default App;
