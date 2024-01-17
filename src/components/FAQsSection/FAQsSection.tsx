import { useState } from "react";
import { FAQs } from "../../content";
import Accordion from "../Accordion/Accordion";
import styles from "./FAQsSection.module.scss";

const FAQsSection = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number>(0);

  /**
   * Handles the click event on the accordion header to open its closed state and close.
   */
  const onAccordionClick = (index: number) => {
    setOpenAccordionIndex(index);
  };

  return (
    <div className={styles.FAQsSectionContainer}>
      <h5 className={styles.heading}>FAQ's</h5>
      <p className={styles.description}>
        Let us help answer the most common questions.
      </p>

      {FAQs?.map((FAQ, index) => (
        <div className={styles.accordionWrapper}>
          <Accordion
            title={FAQ.title}
            description={FAQ.description}
            isAccordionOpen={openAccordionIndex === index}
            onClick={() => onAccordionClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default FAQsSection;
