import { Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import WorldMap from 'react-svg-worldmap';
import Grid from './Grid';
import About from './About';
import Navbar from '../components/Navbar';
import styles from '../sass/pages/home.module.scss';

const Home = () => {
  const [header, setHeader] = useState('STATS BY COUNTRY');
  const [menu, setMenu] = useState('bars');
  const [open, setOpen] = useState(false);
  const [countryName, setCountryName] = useState('US');
  const stylingFunction = ({ countryCode }) => (
    {
      fill: countryCode === countryName ? '#000' : '#ec4c8a',
      stroke: 'black',
      strokeWidth: 5,
      strokeOpacity: 0.2,
      cursor: 'pointer',
    }
  );

  const { worldWrapper } = styles;

  return (
    <section>
      {open && <Navbar open={setOpen} />}
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
        {menu === 'bars' ? (
          <button
            onClick={() => setOpen(true)}
            style={{
              border: 0,
              backgroundColor: 'transparent',
              color: '#fff',
              fontSize: '1.2rem',
            }}
            type="button"
          >
            <i className={`fa-solid fa-${menu}`} />
          </button>
        ) : (
          <NavLink to="/home" style={{ color: '#fff' }}>
            <i className={`fa-solid fa-${menu}`} />
          </NavLink>
        )}
        <h1 style={{ fontWeight: 300, fontSize: '1.15rem', margin: 0 }}>
          pollution
        </h1>
      </header>

      <div className={worldWrapper} style={{ position: 'relative' }}>
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
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#ec4c8a',
            opacity: 0.4,
          }}
        />
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
          {header}
        </p>
      </div>
      <Routes>
        <Route
          path="/"
          element={(
            <Grid
              setHeader={setHeader}
              setMenu={setMenu}
              setCountry={setCountryName}
            />
          )}
        />
        <Route
          path="/:name"
          element={(
            <About
              setHeader={setHeader}
              setMenu={setMenu}
              setCountry={setCountryName}
            />
          )}
        />
      </Routes>
    </section>
  );
};

export default Home;
