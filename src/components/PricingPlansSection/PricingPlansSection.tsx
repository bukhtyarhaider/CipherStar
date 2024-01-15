import { pricingPlans } from "../../content";
import PricingCard from "../PricingCard/PricingCard";
import styles from "./PricingPlansSection.module.scss";

const PricingPlansSection = () => {
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

      <div className={styles.cardsWrapp}>
        {pricingPlans?.map((plan) => (
          <PricingCard
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
