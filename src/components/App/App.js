import './App.css';
import Card from '../Card/Card';
import { useState } from 'react';
import { inputs } from './Inputs' 

function App() {
  const [searchResults, setSearchResults] = useState(inputs);
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    const results = inputs.filter((card) => card.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }

  return (
    <div className="App">
      <div className="Search">
        <p>Search:</p>
        <input onChange={handleInputChange} placeholder='Type to search' type='text'></input>
      </div>
      <div className="Cards">
        {
          searchResults.map((card) => {
            return(<Card key={Math.random()} name={card.name} type={card.type} />);
          })
        }
      </div>
    </div>
  )
}

export default App;