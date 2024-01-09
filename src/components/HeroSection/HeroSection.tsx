import { buttonArrow, headerPng } from "../../assets";
import CustomButton from "../CutomButton/CustomButton";
import styles from "./HeroSection.module.scss";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.headingTop}>Empower</h1>
        <h1 className={styles.headingAccentTop}>Empower</h1>
        <h1 className={styles.headingShadowTop}>Empower</h1>

        <h1 className={styles.headingMiddle}>Your Future</h1>
        <h1 className={styles.headingAccentMiddle}>Your Future</h1>
        <h1 className={styles.headingShadowMiddle}>Your Future</h1>

        <h1 className={styles.headingBottom}>With CipherStar</h1>
        <h1 className={styles.headingAccentBottom}>With CipherStar</h1>
        <h1 className={styles.headingShadowBottom}>With CipherStar</h1>

        <div className={styles.content}>
          <p className={styles.bottomText}>
            Join the revolutionary world of blockchain technology and digital
            assets with CipherStar. Experience secure transactions,
            decentralized control, and limitless possibilities for financial
            empowerment. Start your journey towards a decentralized future
            today.
          </p>
          <div className={styles.buttonWrapper}>
            <CustomButton
              title="Buy crypto"
              size="large"
              color="default"
              outLine
            />
            <div className={styles.sellCrypto}>
              Sell Crypto{" "}
              <span>
                <img src={buttonArrow} />
              </span>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrap}>
          <motion.div animate={{ x: 100 }}>
            <img src={headerPng} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
