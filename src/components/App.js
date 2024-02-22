import './App.css';
import Card from './Card';

const inputs = [
  {"name": "test1", "type": "test"}, 
  {"name": "test31", "type":"defaultType"},
  {"name": "test32", "type": "testing"},
  {"name": "test33", "type": "testing"}
];


function App() {
  return (
    <div className="App">
      <div className="Cards">
        {
          inputs.map((card) => {
            return(<Card key={card.name} name={card.name} type={card.type} />);
          })
        }
      </div>
    </div>
  )
}

export default App;