/**
 * Props for the CustomButton component.
 */
export interface CustomButtonProps {
  /**
   * The size of the button. (e.g., "small", "medium", "large")
   */
  size: "small" | "large";

  /**
   * The text content of the button.
   */
  title: string;

  /**
   * The color of the button.
   */
  color: "default" | "accent";

  /**
   * Flag to determine if the button should have an outline style.
   */
  outLine?: boolean;

  /**
   * Flag to determine if the button should have a condensed style.
   */
  condensed?: boolean;

  /**
   * The border shadow of the button.
   */
  shadow?: boolean;

  /**
   * Event handler for the button click.
   */
  onClick?: () => void;
}
