import './Card.css'

function Card( {title, type} ) {
  return (
    <div className="Card">
      <img className="Card-image"  src='/png.png'></img>
      <p className="Card-title">{title}</p>      
    </div>
  );
}

export default Card;