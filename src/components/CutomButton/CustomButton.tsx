import React from "react";
import styles from "./CustomButton.module.scss";
import { CustomButtonProps } from "./CustomButtonProps";
const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  color,
  title,
  outLine,
  shadow,
  condensed,
  onClick,
}) => {
  const buttonClassName = `${styles["custom-button"]} ${styles[size]} ${
    styles[color]
  } ${condensed && styles["condensed-button"]}`;

  return (
    <div
      className={`${styles.buttonWrapp} ${
        outLine && styles["outLine-button"]
      } ${shadow && styles.shadow}`}
    >
      <button className={buttonClassName} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
