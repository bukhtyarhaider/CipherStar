import React, { useMemo } from "react";
import CustomButton from "../CutomButton/CustomButton";
import styles from "./PricingCard.module.scss";
import { PricingCardProps } from "./PricingCardProps";

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  popular,
  description,
  price,
  features,
  button,
  discount,
  tenure,
}) => {
  const getSubscriptionFee = useMemo(() => {
    if (tenure === "annually") {
      const anuallFee = price * 12;

      if (discount > 0) {
        return Math.round(anuallFee - anuallFee * (discount / 100));
      }

      return Math.round(anuallFee);
    }

    return price;
  }, [tenure]);

  return (
    <div className={styles.pricingCardContainer}>
      {popular && <h6 className={styles.popular}>Popular</h6>}
      <h3 className={styles.planeName}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.priceWrapp}>
        <span className={styles.dollar}>$</span>
        <span className={styles.price}>{getSubscriptionFee}</span>
        <span className={styles.month}>
          {tenure === "annually" ? "/year" : "/month"}
        </span>
      </p>
      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className={styles.buttonWrapp}>
        <CustomButton {...button} />
      </div>
    </div>
  );
};

export default PricingCard;
