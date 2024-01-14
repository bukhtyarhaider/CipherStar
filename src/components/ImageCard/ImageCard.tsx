import { useEffect, useState } from "react";
import styles from "./ImageCard.module.scss";
import ImageCardProps from "./ImageCardProps";

const ImageCard: React.FC<ImageCardProps> = ({ image, title, description }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gradientWrap = document.getElementById("gradientWrap");
      if (gradientWrap) {
        const rect = gradientWrap.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsCardHovered(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.imageCardContainer}>
      <div className={styles.container}>
        <div
          id="gradientWrap"
          className={`${styles.gradientWrap} ${
            isCardHovered ? styles.activeGradientWrap : ""
          }`}
        ></div>
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
