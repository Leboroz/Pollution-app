import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import PollutionAPI from '../redux/PollutionAPI';
import Card from '../components/Card';
import { fetchPollution } from '../redux/pollution/reducer';
import { data } from '../redux/data';

const About = ({ setHeader, setMenu, setCountry }) => {
  const dispatch = useDispatch();
  const location = useLocation().search;
  const name = useParams().name;
  const state = useSelector((state) => state.pollution.pollutionData);
  const reExp = /^\?lat=(\-?\d+(\.\d+)?)&lon=(\-?\d+(\.\d+)?)$/;
  const countryName = data.filter((country) => country[3] === name)[0][0];
  setCountry(countryName);
  const lat = location.match(reExp)[1];
  const lon = location.match(reExp)[3];

  let pollutant;
  useEffect(async () => {
    const response = await PollutionAPI.get(lat, lon);
    response.name = name;
    dispatch(fetchPollution(response));
  }, [pollutant]);
  if (Object.keys(state).length > 0) {
    pollutant = Object.entries(state.list[0].components);
    setHeader(state.name.toUpperCase());
    setMenu('chevron-left');
  }
  return (
    (pollutant &&
      pollutant.map((pollutant, index) => {
        let name;
        switch (pollutant[0]) {
          case 'co':
            name = 'CO';
            break;
          case 'no':
            name = 'NO';
            break;
          case 'no2':
            name = 'NO\u2082';
            break;
          case 'o3':
            name = 'O\u2083';
            break;
          case 'so2':
            name = 'SO\u2082';
            break;
          case 'pm2_5':
            name = 'PM\u2082\u2024\u2085';
            break;
          case 'pm10':
            name = 'PM\u2081\u2080';
            break;
          case 'nh3':
            name = 'NH\u2083';
            break;
        }
        return (
          <Card
            key={name}
            name={name}
            value={pollutant[1]}
            even={index % 2 === 0 ? false : true}
          />
        );
      })) || <h1>loading</h1>
  );
};

export default About;
