import { login } from '../redux/pollution/reducer';
import { useAppDispatch } from '../redux/redux-hooks';
import styles from '../sass/components/form.module.scss';

const Form = () => {
  const { field, submit, form } = styles;
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(login());
  };

  return (
    <form onSubmit={handleSubmit} className={form}>
      <h2 className="display-1 white">login with your dribbble account</h2>
      <label htmlFor="user">
        <input
          className={field}
          title="user"
          id="user"
          type="text"
          placeholder="username"
          value="admin"
          readOnly
        />
      </label>
      <label htmlFor="password">
        <input
          className={field}
          title="password"
          type="password"
          id="password"
          placeholder="password"
          value="admin"
          readOnly
        />
      </label>
      <button type="submit" className={submit}>
        <i className="fa-solid fa-basketball" />
        &#160;BALL
      </button>
    </form>
  );
};

export default Form;
