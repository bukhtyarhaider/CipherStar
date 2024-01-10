import styles from "./ImageCard.module.scss";
import ImageCardProps from "./ImageCardProps";

const ImageCard: React.FC<ImageCardProps> = ({ image, title, description }) => {
  return (
    <div className={styles.imageCardContainer}>
      <div className={styles.container}>
        <div className={styles.gradientWrap}></div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrap}>
            <img src={image} />
          </div>
        </div>
      </div>

      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ImageCard;
