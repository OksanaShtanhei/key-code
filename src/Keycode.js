import React from 'react';
import './App.css';

function Keycode({entries}) {
    
  return (
      
    <div className="output">
         {entries.map((el) => { 
                return <div key={Math.random()} className="container">
                    <h3 key={el[0]} className="name">{el[0]}</h3>
                    <div key={el[1]} className="value">{el[1]}</div>
              </div>
           }) 
        } 
     {/* <div className="container">
            <h3 className="code">{entries[0]}</h3>
            <div className="out">{entries[1]}</div>
        </div>
        <br/>
        <div className="container">
            <h3 className="key">{entries[0]}</h3>
            <div className="out">{entries[1]}</div>
        </div>
        <br/>
        <div className="container">
            <h3 className="code">{entries[0]}</h3>
            <div className="out">{entries[1]}</div>
        </div>  */}
      
     </div>
  );
}

export default Keycode;