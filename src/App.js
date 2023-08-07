import './App.css';
import ComingSoonPage from './ComingSoonPage';
import React, { useEffect } from 'react';




function App() {
    useEffect(() => {
    document.title = 'Sarvottam Megapolis';
  }, []);
  return (
    <div className="App">
      <ComingSoonPage/>
    </div>
  );
}

export default App;
