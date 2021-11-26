// Source Imports
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

// Component Imports
import HeaderMenu from './components/HeaderMenu';
import ViewSelectMenu from './components/ViewSelectMenu';

// Design Imports
import './App.css';
import DailyBoard from './components/DailyBoard';

function App() {
  const [card, setCard] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <HeaderMenu></HeaderMenu>
      </header>

      <section className="cell-main">
        <ViewSelectMenu></ViewSelectMenu>

        <Button onClick={() => setCard(!card)}>Click Here</Button>
        { card && <DailyBoard></DailyBoard> }
      </section>

    </div>
  );
}

export default App;
