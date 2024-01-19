import { Link } from "react-router-dom";
import {
  facebook,
  footerGradientLeft,
  footerGradientRight,
  instagram,
  logo,
  patternFooterSvg,
  youtube,
} from "../../assets";
import { footerInfo } from "../../content";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.top}>
        <h2 className={styles.heading}>
          Enroll in one of our <span>CipherStar Plans</span> and enjoy various
          benefits.
        </h2>

        <div className={styles.inputWrapp}>
          <input type="text" placeholder="Your email address" />
          <div className={styles.button}>Send</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.social}>
          <div className={styles.logoWrapp}>
            <img src={logo} />
          </div>
          <div className={styles.socialIcons}>
            <img src={instagram} />
            <img src={facebook} />
            <img src={youtube} />
          </div>
        </div>
        <div className={styles.contact}>
          <h2>Contact</h2>
          <p>+1 (206)-8237</p>
          <p>info@gearcraft.com</p>
          <div className={styles.line} />

          <p>1234 Elm Street, Springfield, CA 12345, USA</p>
          <div className={styles.line} />
        </div>
        <div className={styles.information}>
          <h2>Information</h2>
          {footerInfo?.map((info) => (
            <div>
              <Link to={info.url}>{info.name}</Link>
            </div>
          ))}
        </div>
      </div>

      <img src={footerGradientLeft} className={styles.footerGradientLeft} />
      <img src={footerGradientRight} className={styles.footerGradientRight} />
      <img src={patternFooterSvg} className={styles.patternFooterSvg} />

      <p className={styles.copyrights}>CipherStar © Some rights reserved.</p>
    </div>
  );
};

export default Footer;
