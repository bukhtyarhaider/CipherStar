import { joinChipherstarSvg } from "../../assets";
import styles from "./JoinCipherStar.module.scss";

const JoinCipherStar = () => {
  return (
    <div className={styles.joinCipherStar}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrap}>
          <img src={joinChipherstarSvg} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.heading}>
          Join <span>CipherStar</span>
        </h2>

        <p className={styles.description}>
          Join us on our journey to transform the financial landscape. Whether
          you're a seasoned crypto enthusiast or a newcomer to the world of
          digital assets, Cipher Star is here to empower you on your path to
          financial freedom.
        </p>

        <p className={styles.description}>
          As pioneers in blockchain technology and decentralized finance (DeFi),
          we offer a host of compelling reasons to choose us as your trusted
          partner in the digital financial landscape.
        </p>
      </div>
    </div>
  );
};

export default JoinCipherStar;
