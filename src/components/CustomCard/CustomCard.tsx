import styles from "./CustomCard.module.scss";
import CustomCardProps from "./CustomCardProps";

const CustomCard: React.FC<CustomCardProps> = ({ title, description }) => {
  return (
    <div className={styles.customCardContainer}>
      <div className={`${styles.gradientWrap}`}>
        <div className={styles.content}>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
