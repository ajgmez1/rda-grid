import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './components/Select';
import Grid from './components/Grid';
import Info from './components/Info';

const API_URL = 'https://random-data-api.com/api/';

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const search = (r: string) => {
    fetch(API_URL + r + '?size=100')
      .then((r) => r.json())
      .then((j) => {
        j = j.sort((a: {id:number},b: {id:number}) => a.id - b.id);
        setData(j);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> <a target="_blank" className='App-link'
        href="https://random-data-api.com/documentation"> 
          Random Data API 
        </a></p>
        <Select search={search} />
      </header>
      <main>
        <div style={{display:'flex'}}>
          <Grid data={data} setSelected={setSelected} />
          <Info selected={selected} />
        </div>
      </main>
    </div>
  );
}

export default App;
