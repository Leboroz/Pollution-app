import { func } from 'prop-types';
import { NavLink } from 'react-router-dom';
import pic from '../assets/images/profile-pic.png';
import style from '../sass/pages/navbar.module.scss';

const Navbar = ({ open }) => {
  const {
    header,
    wrapper,
    title,
    navItem,
    navbar,
    container,
  } = style;
  return (
    <header className={container}>
      <div className={header}>
        <figure className={wrapper}>
          <img src={pic} alt="profile" />
        </figure>
        <div className={title}>
          <h3>User</h3>
          <p>Guess</p>
        </div>
        <button
          type="button"
          onClick={() => {
            open(false);
          }}
          style={{
            color: '#fff',
            alignSelf: 'flex-start',
            fontSize: '2rem',
            border: 0,
            backgroundColor: 'transparent',
          }}
        >
          <i className="fa-solid fa-circle-xmark" />
        </button>
      </div>
      <nav className={navbar}>
        <ul>
          <li>
            <NavLink
              onClick={() => {
                open(false);
              }}
              className={navItem}
              to="/home"
            >
              <i
                style={{ color: '#fff' }}
                className="fa-solid fa-table-cells-large"
              />
              <p>COUNTRIES</p>
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                open(false);
              }}
              className={navItem}
              type="button"
            >
              <i
                style={{ color: '#fff' }}
                className="fa-solid fa-chart-line"
              />
              <p>YEAR STATS</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                open(false);
              }}
              className={navItem}
              type="button"
            >
              <i
                style={{ color: '#fff' }}
                className="fa-solid fa-cart-shopping"
              />
              <p>PREMIUM</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                open(false);
              }}
              className={navItem}
              type="button"
            >
              <i style={{ color: '#fff' }} className="fa-solid fa-gear" />
              <p>SETTINGS</p>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  open: func.isRequired,
};

export default Navbar;
