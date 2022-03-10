import { NavLink } from 'react-router-dom';
import pic from '../assets/images/profile-pic.png';
import style from '../sass/pages/navbar.module.scss';

const Navbar = ({ open }) => {
  const { header, wrapper, title, navItem, navbar, container } = style;
  console.log(style);

  return (
    <header className={container}>
      <div className={header}>
        <figure className={wrapper}>
          <img src={pic} alt="profile picture" />
        </figure>
        <div className={title}>
          <h3>User</h3>
          <p>Guess</p>
        </div>
        <i
          onClick={() => {
            open(false);
          }}
          style={{ color: '#fff', alignSelf: 'flex-start', fontSize: '2rem' }}
          className="fa-solid fa-circle-xmark"
        ></i>
      </div>
      <nav className={navbar}>
        <ul>
          <li>
            <NavLink className={navItem} to="/home">
              <i
                style={{ color: '#fff' }}
                className="fa-solid fa-table-cells-large"
              ></i>
              <p>COUNTRIES</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={navItem} to="/stats">
              <i
                style={{ color: '#fff' }}
                className="fa-solid fa-chart-line"
              ></i>
              <p>YEAR STATS</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={navItem} to="/premium">
              <i
                style={{ color: '#fff' }}
                className="fa-solid fa-cart-shopping"
              ></i>
              <p>PREMIUM</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={navItem} to="/settings">
              <i style={{ color: '#fff' }} className="fa-solid fa-gear"></i>
              <p>SETTINGS</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
