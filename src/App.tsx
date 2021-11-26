// Source Imports
import React, { useState } from 'react';
import TaskMapInit from './data/TaskMap';

// Component Imports
import HeaderMenu from './components/HeaderMenu';
import ViewSelectMenu from './components/ViewSelectMenu';

// Design Imports
import './App.css';
import DailyBoard from './components/DailyBoard';
import { Task } from './interfaces/Task';

function App() {
  // Weekly Task Handling
  const [taskMap, setTaskMap] = useState<Record<string, Task[]>>(TaskMapInit);

  return (
    <div className="App">
      <header className="App-header">
        <HeaderMenu></HeaderMenu>
      </header>

      <section className="cell-main">
        <ViewSelectMenu></ViewSelectMenu>

        <DailyBoard
          setTaskMap={setTaskMap}
          taskMap={taskMap}
        ></DailyBoard>
      </section>

    </div>
  );
}

export default App;
