import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={`${styles.loaderContainer} ${styles.overlay}`}>
      <div className={`${styles.loader}`}></div>
    </div>
  );
};
export default Spinner;
