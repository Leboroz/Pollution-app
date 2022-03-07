import styles from '../sass/components/toggle.module.scss';

const Toggle = () => {
  const { toggle, slider } = styles;
  return (
    <div className={toggle}>
      <div className={slider}></div>
    </div>
  );
};

export default Toggle;
