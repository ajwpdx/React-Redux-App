import React from 'react';

import Jokes from './components/Jokes'

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header>
        <h1>Jokester 😂</h1>
      </header>
      <Jokes />
    </div>
    </div>
  );
}

export default App;
