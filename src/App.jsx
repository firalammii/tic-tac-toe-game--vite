import { useContext } from 'react';
import { ContextProvider } from './components/ContextProvider';

import Board from './components/Board';

function App () {
  return (
    <div className="App">
      <ContextProvider>
        <Board />
      </ContextProvider>
    </div>
  )
}

export default App
