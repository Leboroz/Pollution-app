import Toggle from '../components/Toggle';
import styles from '../sass/pages/login.module.scss';
import ballhead from '../assets/images/ballhead.png';
import Form from '../components/Form';

const Login = () => {
  const {
    wrapper,
    forgotUsername,
    signInWithTwitter,
    languages,
    logIn,
  } = styles;

  return (
    <section className={logIn}>
      <div className={languages}>
        <span>EN</span>
        <Toggle />
        <span>SP</span>
      </div>

      <div className={wrapper}>
        <figure>
          <img
            src={ballhead}
            alt="ballhead"
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </figure>
        <Form />
        <button className={forgotUsername} type="button">
          forgot username/password
        </button>
      </div>

      <button className={signInWithTwitter} type="button">
        sign in with twitter
      </button>
    </section>
  );
};

export default Login;
