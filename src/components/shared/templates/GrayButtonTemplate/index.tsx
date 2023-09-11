import styles from "./lib/styles.module.css";


const GrayButtonTemplate = ({children, icon, text}: {children?: JSX.Element, icon: JSX.Element, text: string}) => {
  return (
    <div className={styles.container}>
      {icon}
      <div className={styles.text_module}>{text}</div>
      {children}
    </div>
  );
};

export default GrayButtonTemplate;
