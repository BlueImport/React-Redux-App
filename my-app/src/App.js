import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  axios
    .get("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
    .then((res) => {
      console.log(res)
    })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Age Of Empires II</h1>
      </header>
    </div>
  );
}

export default App;
