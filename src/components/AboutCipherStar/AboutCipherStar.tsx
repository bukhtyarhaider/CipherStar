import { useNavigate } from "react-router-dom";
import { aboutPageGreadientLeft, aboutPageGreadientRight } from "../../assets";
import CustomButton from "../CutomButton/CustomButton";
import FAQsSection from "../FAQsSection/FAQsSection";
import styles from "./AboutCipherStar.module.scss";

const AboutCipherStar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.aboutCipherStarContainer}>
      <h2 className={styles.heading}>
        About <span>CipherStar</span>
      </h2>

      <p className={styles.description}>
        At CipherStar, we are passionate about the future of finance and the
        transformative potential of blockchain technology. Our mission is to
        provide a seamless and secure platform for individuals and businesses to
        engage with the exciting world of cryptocurrencies.
      </p>

      <h2 className={styles.primarySubHeading}>Our Vision:</h2>

      <p className={styles.description}>
        At CipherStar, we envision a future where financial transactions are
        borderless, efficient, and inclusive. We believe that everyone should
        have access to the opportunities presented by cryptocurrencies,
        regardless of their location or background. Our cryptocurrency is
        designed to bridge gaps, facilitate secure transactions, and foster
        financial freedom for all.
      </p>

      <h2 className={styles.secondarySubHeading}>What Sets Us Apart:</h2>

      <p className={styles.description}>
        We leverage the latest advancements in blockchain technology to offer a
        secure and efficient platform for transactions and smart contracts.
      </p>

      <p className={styles.description}>
        Our community is at the heart of everything we do. We actively seek and
        value feedback from our users, ensuring that our development roadmap
        aligns with their needs and preferences.
      </p>
      <div className={styles.FAQsSectionWrapper}>
        <FAQsSection />
      </div>

      <div className={styles.bottomContent}>
        <p className={styles.descriptionBottom}>
          Whether you're new to the world of cryptocurrencies or a seasoned
          investor, We are here to provide you with a user-friendly and secure
          platform to explore, trade, and engage. We invite you to be a part of
          our growing community as we pave the way for the future of finance.
        </p>

        <div className={styles.buttonWrapper}>
          <CustomButton
            title="Buy crypto"
            outLine
            color="accent"
            size="large"
            onClick={() => navigate("/404")}
          />
        </div>
      </div>

      <div className={styles.aboutPageGreadientLeft}>
        <img src={aboutPageGreadientLeft} alt="aboutPageGreadientLeft" />
      </div>

      <div className={styles.aboutPageGreadientRight}>
        <img src={aboutPageGreadientRight} alt="aboutPageGreadientRight" />
      </div>
    </div>
  );
};

export default AboutCipherStar;
