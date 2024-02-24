import './App.css';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { inputs } from './Inputs';
import axios from 'axios';

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data)
  })
}

function App() {
  const [inputs, setInputs] = useState([]);
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    }
    fetch("http://localhost:8000/anime", requestOptions)
      .then((response) => response.json())
      .then((result) => setInputs(result))
      .then((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  const [searchResults, setSearchResults] = useState(inputs);
  useEffect(() => {setSearchResults(inputs)}, [inputs]); //this forces inputs as default

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    const results = inputs.filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }

  return (
    <div className="App">
      <div className="Search">
        <p>Search:</p>
        <input onChange={handleInputChange} placeholder='Type to search' type='text'></input>
      </div>
      <button onClick={apiCall}>
        Make API call
      </button>
      <div className="Cards">
        {
          searchResults.map((card) => {
            return(<Card key={Math.random()} title={card.title} type={card.type} score={card.score}/>);
          })
        }
      </div>
    </div>
  )
}

export default App;