import React from 'react';
import WordCard from './WordCard';
import './App.css';


const word = ["Hello", "World"];
function App() {
  return(
    <div>
     <WordCard value={word[0]}/>
     <WordCard value={word[1]}/>
    </div>
  )
}

export default App;