import { useEffect } from 'react';
import { func } from 'prop-types';
import data from '../redux/data';
import Card from '../components/Card';

const Grid = ({ setHeader, setMenu, setCountry }) => {
  useEffect(() => {
    setHeader('STATS BY COUNTRY');
    setMenu('bars');
    setCountry('');
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', color: '#fff' }}>
      {data.map((country, index) => (
        <Card
          key={country[0]}
          even={(index + 1) % 4 === 0 || index % 4 === 0}
          name={country[3]}
          lat={country[1]}
          lon={country[2]}
          short={country[0]}
          isCard
        />
      ))}
    </div>
  );
};

Grid.propTypes = {
  setHeader: func.isRequired,
  setMenu: func.isRequired,
  setCountry: func.isRequired,
};

export default Grid;
