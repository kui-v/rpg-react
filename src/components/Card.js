import './Card.css'

function Card( {name, type} ) {
  return (
    <div className="Card">
      <img className="Card-Image" src="https://placehold.co/140x140/png"></img>
      <p>{name}</p>
      <p>{type}</p>
    </div>
  );
}

export default Card;