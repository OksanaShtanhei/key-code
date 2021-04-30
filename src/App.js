import React, {useState, useEffect} from 'react';
import './App.css';
import Main from './Main';

function App() {
  const [flag, setFlag] = useState(false)
  const [pressed, setPressed] = useState({
    name: '',
    key: '',
    code: '',
  })

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      setPressed({
        name: event.code,
        key: event.key,
        code: event.keyCode,
      })
      setFlag(true)
    })
  }, [])
  
  const entries = Object.entries(pressed)
  return (
    <div className="App">
      <Main  flag={flag}
             entries={entries}/>
    </div>
  );
}

export default App;
