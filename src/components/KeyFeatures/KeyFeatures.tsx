import { cardsArray } from "../../content";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./KeyFeatures.module.scss";

const KeyFeatures = () => {
  return (
    <div className={styles.keyFeaturesContainer}>
      <h2 className={styles.heading}>
        Key <span>Features</span>
      </h2>

      <p className={styles.description}>
        Unlock the Potential. Explore the Heartbeat of Cipher Star. Delve into
        the Features that Shape a New Era of Financial Empowerment.
      </p>

      <div className={styles.cardsContainer}>
        {cardsArray?.map((card) => (
          <ImageCard
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
