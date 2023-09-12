import logo from "./../../../../../assets/logo.svg";
import styles from './lib/styles.module.css'

const Title = () => {
  return (
    <div className={styles.title}>
      <span>Image</span>
      <img draggable="false" src={logo} />
      <span>Keeper</span>
    </div>
  );
};

export default Title;
