import React, {useContext} from 'react';
import './App.css';
import {Select} from "./components/select";
import {stateContext} from "./state/state";

const App = () => {
   const state = useContext(stateContext)

  return (
    <div className="App">
      <Select items={state}/>
    </div>
  );
}

export default App;
