import './App.css';
import ComingSoonPage from './ComingSoonPage';
import React, { useEffect } from 'react';




function App() {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
    useEffect(() => {
    document.title = 'Ansal Megapolis';
  }, []);
  return (
    <div className="App">
      <ComingSoonPage/>
    </div>
  );
}

export default App;
