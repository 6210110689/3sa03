import React from 'react';
import WordCard from './WordCard';
import './App.css';



const words = ["Hello", "World", "apple", "banana"]
function App() {
  return(
    <div>
      {words.map(w =>(<WordCard value={w}/> ))}
    </div>
  )
}

export default App;