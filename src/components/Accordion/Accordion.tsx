import React from "react";
import { arrow } from "../../assets";
import styles from "./Accordion.module.scss";
import { AccordionProps } from "./AccordionProps";

const Accordion: React.FC<AccordionProps> = ({
  title,
  description,
  onClick,
  isAccordionOpen,
}) => {
  return (
    <div
      className={`${styles.accordionContainer} ${
        isAccordionOpen ? styles.accordionContainerOpen : ""
      }`}
    >
      <div className={styles.header} onClick={onClick}>
        <p>{title}</p>
        <img
          src={arrow}
          alt="Arrow"
          className={`${styles.arrow} ${isAccordionOpen ? styles.flip : ""}`}
        />
      </div>
      <div className={`${styles.body} ${isAccordionOpen ? styles.show : ""}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Accordion;
