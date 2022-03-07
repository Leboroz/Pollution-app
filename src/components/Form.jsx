import styles from '../sass/components/form.module.scss';

const Form = () => {
  const { field, submit, form } = styles;
  return (
    <form className={form}>
      <h2 className="display-1 white">login with your dribbble account</h2>
      <label htmlFor="user">
        <input
          className={field}
          title="user"
          type="text"
          placeholder="username"
        />
      </label>
      <label htmlFor="password">
        <input
          className={field}
          title="password"
          type="password"
          placeholder="password"
        />
      </label>
      <button type="submit" className={submit}>
        <i className="fa-solid fa-basketball"></i> BALL
      </button>
    </form>
  );
};

export default Form;
