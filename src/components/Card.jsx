import { bool, number, string } from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../sass/components/card.module.scss';

const Card = (props) => {
  const { card, darker } = styles;
  const {
    name,
    lon,
    lat,
    short,
    even,
    value,
    isCard = false,
  } = props;

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
      <i className="fa-regular fa-circle-right" />
      <h2>
        {name.toUpperCase()}
        ,&#160;
        {short}
      </h2>
      <div>
        <p>
          lon:&#160;
          {lon}
        </p>
        <p>
          lat:&#160;
          {lat}
        </p>
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
        <p>
          value:&#160;
          {value}
        </p>
        <i className="fa-regular fa-circle-right" />
      </div>
    </div>
  );
};

Card.propTypes = {
  name: string.isRequired,
  short: string.isRequired,
  lon: number.isRequired,
  lat: number.isRequired,
  value: number.isRequired,
  even: bool.isRequired,
  isCard: bool.isRequired,
};

export default Card;
