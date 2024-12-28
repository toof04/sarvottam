import './App.css';
import ComingSoonPage from './ComingSoonPage';
import React, { useEffect } from 'react';




function App() {
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
