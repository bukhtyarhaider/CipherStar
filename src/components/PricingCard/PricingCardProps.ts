import { CustomButtonProps } from "../CutomButton/CustomButtonProps";
/**
 * Props for the PricingCard component.
 */
export interface PricingCardProps {
  /**
   * The name of the pricing plan.
   */
  planName: string;

  /**
   * The popular tag of the pricing plan.
   */
  popular: boolean;

  /**
   * The description of the pricing plan.
   */
  description: string;

  /**
   * The price of the pricing plan.
   */
  price: number;

  /**
   * The list of features included in the pricing plan.
   */
  features: string[];

  /**
   * The list of features included in the pricing plan.
   */
  button: CustomButtonProps;
}
