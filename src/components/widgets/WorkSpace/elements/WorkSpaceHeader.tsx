import AmountDisplayer from "../../../ui/other/AmountDisplayer";
import styles from "./../lib/styles.module.css";

const WorkSpaceHeader = ({header, amount}: {header: string, amount: number}) => {
  return (
    <div className={styles.workSpaceHeader_container}>
      <span>{header}</span>
      <AmountDisplayer amount={amount} />
    </div>
  );
};

export default WorkSpaceHeader;
