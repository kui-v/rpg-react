import './Card.css'

function Card( {name, type} ) {
  return (
    <div className="Card">
      <img className="Card-image"  src='/png.png'></img>
      <p className="Card-name">{name}</p>
      <p className="Card-type">{type}</p>
    </div>
  );
}

export default Card;