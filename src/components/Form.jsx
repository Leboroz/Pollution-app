import styles from '../sass/components/form.module.scss';

const Form = () => {
  const { submit, form } = styles;
  return (
    <form className={form}>
      <label htmlFor="user">
        <input title="user" type="text" placeholder="username" />
      </label>
      <label htmlFor="password">
        <input title="password" type="password" placeholder="password" />
      </label>
      <button type="submit" className={submit}>
        <i class="fa-solid fa-basketball"></i> BALL
      </button>
    </form>
  );
};

export default Form;
