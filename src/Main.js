import React from 'react';
import Keycode from './Keycode';
import './App.css';

function Main({flag, entries}) {
  
  return (
    <div className="Main">
      <button className="btn">Press any key to know it's code</button>
      {flag && <Keycode entries={entries} />}
      {/* <Keycode pressed={entries} /> */}
    </div>
  );
}

export default Main;