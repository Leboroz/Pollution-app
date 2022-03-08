import { useDispatch } from 'react-redux';
import { fetchPollution } from '../redux/pollution/reducer';
import PollutionAPI from '../redux/PollutionAPI';
import styles from '../sass/components/card.module.scss';
import { Link } from 'react-router-dom';

const Card = ({ name, lon, lat, short, even }) => {
  const dispatch = useDispatch();
  const { card, darker } = styles;

  const handleAboutFetch = async () => {
    const response = await PollutionAPI.get(lat, lon);
    dispatch(fetchPollution(response));
  };

  return (
    <Link
      onClick={handleAboutFetch}
      className={`${card} ${even ? darker : ''}`}
      to="/home/about"
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
  );
};

export default Card;
