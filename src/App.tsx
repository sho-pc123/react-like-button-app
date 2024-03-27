import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState(999);
  const handeleClick = () => {
    setCount(count + 1);
  };
  return <span className='likeButton' onClick={handeleClick}>♡ { count }</span>;
}

export default App;
