import { useNavigate } from "react-router-dom";
import { decentralizationControlSvg, securityFirstSvg } from "../../assets";
import CustomButton from "../CutomButton/CustomButton";
import styles from "./WhyChooseUs.module.scss";

const WhyChooseUs = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.whyChooseUsContainer}>
      <h2 className={styles.heading}>
        Why <span>Choose Us</span>?
      </h2>

      <p className={styles.description}>
        Experience the Future of Finance with CipherStar. Our platform is more
        than just a gateway to the world of cryptocurrencies – it's a
        transformative journey towards a decentralized economy.
      </p>

      <div className={styles.section}>
        <div className={`${styles.imageConatainer} ${styles.section1Image}`}>
          <div className={styles.imageWrap}>
            <img src={decentralizationControlSvg} />
          </div>
          <div className={styles.currenyTrends}>
            <p>Currency Trends</p>
          </div>
          <div className={styles.currenyTrendsBottom}>
            <p>Currency Trends</p>
          </div>
        </div>
        <div className={styles.contentConatainer}>
          <h6 className={styles.title}>Decentralized Control</h6>
          <p className={styles.sectionDescription}>
            We believe in giving you control over your financial destiny. With
            our platform, you're not just a user – you're an active participant
            in the decentralized economy, where you decide how to engage with
            your assets.
          </p>
          <CustomButton
            title="Learn More"
            color="default"
            size="large"
            outLine
            onClick={() => navigate("/404")}
          />
        </div>
      </div>

      <div className={`${styles.section} ${styles.sectionReverse}`}>
        <div className={styles.imageConatainer}>
          <div className={styles.imageWrap}>
            <img src={securityFirstSvg} />
          </div>
        </div>
        <div className={styles.contentConatainer}>
          <h6 className={styles.title}>Security First</h6>
          <p className={styles.sectionDescription}>
            Your peace of mind matters. Our stringent security measures,
            including advanced encryption and multi-layer authentication, keep
            your assets safe from threats and breaches.
          </p>
          <CustomButton
            title="Learn More"
            color="default"
            size="large"
            outLine
            onClick={() => navigate("/404")}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
