import Toggle from '../components/Toggle';
import styles from '../sass/pages/login.module.scss';
import ballhead from '../assets/images/ballhead.png';
import Form from '../components/Form';

const Login = () => {
  const { languages, logIn } = styles;

  return (
    <section className={logIn}>
      <div className={languages}>
        <span>EN</span>
        <Toggle />
        <span>SP</span>
      </div>

      <div>
        <figure style={{ margin: 0 }}>
          <img
            src={ballhead}
            alt="ballhead"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </figure>
        <Form />
      </div>
    </section>
  );
};

export default Login;
