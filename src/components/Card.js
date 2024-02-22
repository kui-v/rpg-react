import './Card.css'

function Card( {name, type} ) {
  return (
    <div className="Card">
      <img className="Card-Image" src="https://cdn.myanimelist.net/images/anime/1806/126216l.jpg"></img>
      <p>{name}</p>
      <p>{type}</p>
    </div>
  );
}

export default Card;