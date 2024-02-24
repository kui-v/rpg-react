import './Card.css'

function getRarity(score) {
  let rarity = '';
  if (score >= 9) {
    rarity = 'gold';
  } else if (score >= 8) {
    rarity = 'silver';
  } else if (score >= 7) {
    rarity = '#CD7F32';
  } else {
    rarity = 'white';
  }
  return rarity;
}

function Card( {title, type, score} ) {
  return (
    <div className="Card" style={{backgroundColor: getRarity(score)}}>
      <img className="Card-image" src='/png.png'></img>
      <p className="Card-title">{title}</p>
      {/* <p>{score}</p> */}
    </div>
  );
}

export default Card;