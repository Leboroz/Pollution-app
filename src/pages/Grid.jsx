import { data } from '../redux/data';
import Card from '../components/Card';
import { useEffect } from 'react';

const Grid = ({ setHeader, setMenu }) => {
  useEffect(() => {
    setHeader('STATS BY COUNTRY');
    setMenu('bars');
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', color: '#fff' }}>
      {data.map((country, index) => (
        <Card
          key={country[0]}
          even={(index + 1) % 4 === 0 || index % 4 === 0 ? true : false}
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
export default Grid;
