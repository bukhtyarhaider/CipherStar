import CustomButton from "../CutomButton/CustomButton";
import styles from "./FreeTrialSection.module.scss";

const FreeTrialSection = () => {
  return (
    <div className={styles.freeTrialContainer}>
      <div className={styles.freeTrialContainerWrapp}>
        <h2 className={styles.heading}>
          Still not convinced? Start with a <span>14-day FREE trial!</span>
        </h2>

        <p className={styles.description}>
          You will get full access to with all the features for 14 days.
        </p>

        <div className={styles.buttonWrapp}>
          <CustomButton
            title="Start 15-day free trial"
            size="small"
            color="default"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeTrialSection;
