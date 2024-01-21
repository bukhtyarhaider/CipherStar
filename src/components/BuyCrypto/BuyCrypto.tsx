import { useNavigate } from "react-router-dom";
import {
  aboutPageGreadientLeft,
  aboutPageGreadientRight,
  graph,
} from "../../assets";
import { buyCryptoCardsData } from "../../content";
import CustomCard from "../CustomCard/CustomCard";
import CustomButton from "../CutomButton/CustomButton";
import styles from "./BuyCrypto.module.scss";

const BuyCrypto = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.buyCryptoContainer}>
      <h2 className={styles.heading}>
        Start Your <span>Crypto Investment</span>
      </h2>

      <p className={styles.description}>
        We believe that everyone should have access to the opportunities
        presented by cryptocurrencies. Our cryptocurrency is designed to bridge
        gaps, facilitate secure transactions, and foster financial freedom for
        all.
      </p>

      <div className={styles.cardsWrapper}>
        {buyCryptoCardsData?.map((card) => (
          <CustomCard title={card.title} description={card.description} />
        ))}
      </div>

      <div className={styles.buttonsWrapper}>
        <div className={styles.button}>
          <CustomButton
            outLine
            title="get started"
            size="large"
            color="default"
            onClick={() => navigate("/404")}
          />
        </div>
        <div className={styles.button}>
          <CustomButton
            title="choose plan"
            size="large"
            color="default"
            onClick={() => navigate("/404")}
          />
        </div>
      </div>

      <div className={styles.graphWrapper}>
        <img src={graph} />
      </div>

      <div className={styles.aboutPageGreadientLeft}>
        <img src={aboutPageGreadientLeft} alt="pageGredient" />
      </div>

      <div className={styles.aboutPageGreadientRight}>
        <img src={aboutPageGreadientRight} alt="pageGredient" />
      </div>
    </div>
  );
};

export default BuyCrypto;
