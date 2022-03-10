import WorldMap from 'react-svg-worldmap';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './About';
import { useState } from 'react';
import Grid from './Grid';
import Navbar from '../components/Navbar';

const Home = () => {
  const [header, setHeader] = useState('STATS BY COUNTRY');
  const [menu, setMenu] = useState('bars');
  const [open, setOpen] = useState(false);

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
            style={{ border: 0, backgroundColor: 'transparent', color: '#fff' }}
            type="button"
          >
            <i className={`fa-solid fa-${menu}`}></i>
          </button>
        ) : (
          <NavLink to="/" style={{ color: '#fff' }}>
            <i className={`fa-solid fa-${menu}`}></i>
          </NavLink>
        )}
        <h1 style={{ fontWeight: 300, fontSize: '1.15rem', margin: 0 }}>
          pollution
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
          {header}
        </p>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Grid setHeader={setHeader} setMenu={setMenu} />}
        />
        <Route
          path="/:name"
          element={<About setHeader={setHeader} setMenu={setMenu} />}
        />
      </Routes>
    </section>
  );
};

export default Home;
