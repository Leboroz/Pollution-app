import { data } from '../redux/data';
import Card from '../components/Card';
import WorldMap from 'react-svg-worldmap';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Home = () => {
  const stylingFunction = () => {
    return {
      fill: '#ec4c8a',
      stroke: 'black',
      strokeWidth: 1,
      strokeOpacity: 0.2,
      cursor: 'pointer',
    };
  };

  return (
    <section>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ec4c8a',
          padding: '5px',
          color: '#fff',
          fontSize: '1.15rem',
        }}
      >
        <i className="fa-solid fa-bars"></i>
        <h1 style={{ fontWeight: 300, fontSize: '1.15rem', margin: 0 }}>
          most views
        </h1>
        <i className="fa-solid fa-gear"></i>
      </header>

      <div style={{ position: 'relative' }}>
        <WorldMap
          size="responsive"
          data={[]}
          color="red"
          styleFunction={stylingFunction}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            width: '80%',
            height: '100%',
            backgroundColor: '#ec4c8a',
            opacity: 0.4,
          }}
        ></div>
      </div>
      <div style={{ backgroundColor: '#ec4c8a', padding: '3px' }}>
        <p
          style={{
            color: '#fff',
            margin: 0,
            fontFamily: 'Gill Sans',
            fontSize: '1rem',
          }}
        >
          STATS BY COUNTRY
        </p>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: 'flex', flexWrap: 'wrap', color: '#fff' }}>
              {data.map((country, index) => (
                <Card
                  key={country[0]}
                  even={(index + 1) % 4 === 0 || index % 4 === 0 ? true : false}
                  name={country[3]}
                  lat={country[1]}
                  lon={country[2]}
                  short={country[0]}
                />
              ))}
            </div>
          }
        />
        <Route />
        <Route path="/about" element={<About />} />
      </Routes>
    </section>
  );
};

export default Home;
