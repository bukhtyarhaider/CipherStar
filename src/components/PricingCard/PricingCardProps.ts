import { CustomButtonProps } from "../CutomButton/CustomButtonProps";
/**
 * Props for the PricingCard component.
 * @interface
 */
export interface PricingCardProps {
  /**
   * The name of the pricing plan.
   * @type {string}
   */
  title: string;

  /**
   * The popular tag of the pricing plan.
   * @type {boolean}
   */
  popular: boolean;

  /**
   * The description of the pricing plan.
   * @type {string}
   */
  description: string;

  /**
   * The price of the pricing plan.
   * @type {number}
   */
  price: number;

  /**
   * The list of features included in the pricing plan.
   * @type {string[]}
   */
  features: string[];

  /**
   * Discount percentage applied to the pricing plan.
   * @type {number}
   */
  discount: number;

  /**
   * Time period of the pricing plan.
   * @type {string}
   */
  tenure: string;

  /**
   * Custom button properties for the pricing plan.
   * @type {CustomButtonProps}
   */
  button: CustomButtonProps;
}
