import styles from '../sass/components/card.module.scss';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { card, darker } = styles;
  const { name, lon, lat, short, even, isCard = false } = props;
  const { value } = props;

  return isCard ? (
    <Link
      className={`${card} ${even ? darker : ''}`}
      style={{
        width: '50%',
        aspectRatio: 1,
        flexDirection: 'column',
      }}
      to={`/home/${name}?lat=${lat}&lon=${lon}`}
    >
      <i className="fa-regular fa-circle-right"></i>
      <h2>
        {name.toUpperCase()}, {short}
      </h2>
      <div>
        <p>lon: {lon}</p>
        <p>lat: {lat}</p>
      </div>
    </Link>
  ) : (
    <div className={`${card} ${even ? darker : ''}`}>
      <h2>{name}</h2>
      <div
        style={{
          display: 'flex',
          width: '8rem',
          justifyContent: 'space-between',
        }}
      >
        <p>value: {value}</p>
        <i className="fa-regular fa-circle-right"></i>
      </div>
    </div>
  );
};

export default Card;
