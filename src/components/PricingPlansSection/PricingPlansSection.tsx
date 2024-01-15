import { useState } from "react";
import { arrowLeftDown } from "../../assets";
import { pricingPlans } from "../../content";
import PricingCard from "../PricingCard/PricingCard";
import styles from "./PricingPlansSection.module.scss";
import { Switch } from "antd";

const PricingPlansSection = () => {
  const [tenure, setTenure] = useState<string>("monthly");

  const toggleSwitch = () => {
    setTenure(tenure === "monthly" ? "annually" : "monthly");
  };

  return (
    <div className={styles.pricingPlansSectionContainer}>
      <h2 className={styles.heading}>
        Pricing <span>Plans</span>
      </h2>
      <p className={styles.description}>
        The ultimate solution for managing your cryptocurrency investments and
        staying ahead in the dynamic world of digital assets. Our carefully
        crafted pricing plans are designed to cater to a variety of needs,
        whether you're a casual investor, an active trader, or a seasoned crypto
        enthusiast.
      </p>

      <div className={styles.switchWrapp}>
        <p>Monthly</p>
        <Switch onChange={toggleSwitch} />
        <p>Annually</p>

        <div className={styles.descountCardWrapp}>
          <img src={arrowLeftDown} />
          <p>Save up to 10%</p>
        </div>
      </div>
      <div className={styles.cardsWrapp}>
        {pricingPlans?.map((plan) => (
          <PricingCard
            discount={plan.discount}
            tenure={tenure}
            title={plan.title}
            popular={plan.popular}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            button={plan.button}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPlansSection;
