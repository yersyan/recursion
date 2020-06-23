import React, {useContext} from 'react';
import './App.css';
import {Select} from "./components/select";
import {stateContext} from "./state/state";
import {Checkbox} from "./components/checkbox";
import {chStateContext} from "./state/chState";

const App = () => {
   const state = useContext(stateContext);
   const chState = useContext(chStateContext)

  return (
    <div className="App">
      <Select items={state}/>
      <Checkbox items={chState}/>
    </div>
  );
}

export default App;
