import { feature1Svg, feature2Svg, feature3Svg, feature4Svg } from "./assets";
import { CustomButtonProps } from "./components/CutomButton/CustomButtonProps";

/**
 * Represents a pricing plan with details.
 * @interface
 */
interface PricingPlan {
  /** The name of the pricing plan. */
  planName: string;
  /** The popular tag of the pricing plan. */
  popular: boolean;
  /** The price of the pricing plan. */
  price: number;
  /** A brief description of the pricing plan. */
  description: string;
  /** The list of features included in the pricing plan. */
  features: string[];

  button: CustomButtonProps;
}
export const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about-us",
  },
  {
    name: "Pricing",
    url: "/pricing",
  },
  {
    name: "Buy Crypto",
    url: "/buy-crypto",
  },
];

export const cardsArray = [
  {
    image: feature1Svg,
    title: "Secure Wallet",
    description:
      "Seamlessly manage your cryptocurrencies and digital assets in our secure and user-friendly digital wallet.",
  },
  {
    image: feature2Svg,
    title: "Instant Transactions",
    description:
      "Experience lightning-fast transactions with minimal fees, whether you're sending funds locally or globally.",
  },
  {
    image: feature3Svg,
    title: "Staking and Farming",
    description:
      "Participate in our staking and yield farming opportunities to earn rewards on your holdings.",
  },
  {
    image: feature4Svg,
    title: "Education Support",
    description:
      "We're here to guide you through your crypto journey. Access educational resources and responsive customer support.",
  },
];

export const footerInfo = [
  {
    name: "Bicycles",
    url: "/",
  },
  {
    name: "Insurances",
    url: "/",
  },
  {
    name: "Contact",
    url: "/",
  },
  {
    name: "Terms and Conditions",
    url: "/",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    planName: "Basic",
    popular: false,
    price: 0,
    description: "A simple start for everyone",
    features: [
      "Portfolio Tracking",
      "Price Alerts",
      "Basic News Access",
      "Customer Support",
      "Security",
    ],
    button: {
      title: "Your Current Plan",
      color: "default",
      size: "large",
      outLine: true,
    },
  },
  {
    planName: "Standerd",
    popular: true,
    price: 49,
    description: "For small to medium businesses",
    features: [
      "Unlimited Portfolio Tracking",
      "Unlimited Price Alerts",
      "Advance News Access",
      "Customer Support",
      "Custom  Security",
    ],
    button: {
      title: "Upgrade",
      color: "default",
      size: "large",
      outLine: true,
    },
  },
  {
    planName: "Enterprise",
    popular: false,
    price: 99,
    description: "Solution for big organizations",
    features: [
      "PayPal payments",
      "Logic Jumps",
      "File upload with 5GB storage",
      "Custom domain support",
      "And Much More",
    ],
    button: {
      title: "Contact us",
      color: "default",
      size: "large",
    },
  },
];
