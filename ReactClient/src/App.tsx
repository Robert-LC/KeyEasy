import React from 'react';
import { notes } from './helpers';
import Piano from './Piano';

function App() {
  return( 
    <div>
        <Piano notes={notes} />
    </div>
  );
}

export default App;
