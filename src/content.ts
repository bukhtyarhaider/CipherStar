import { feature1Svg, feature2Svg, feature3Svg, feature4Svg } from "./assets";
import { CustomButtonProps } from "./components/CutomButton/CustomButtonProps";

/**
 * Represents a pricing plan with details.
 * @interface
 */
interface PricingPlan {
  /**
   * Title of the pricing plan.
   * @type {string}
   */
  title: string;

  /**
   * Indicates if the pricing plan is popular.
   * @type {boolean}
   */
  popular: boolean;

  /**
   * Price of the pricing plan.
   * @type {number}
   */
  price: number;

  /**
   * Discount percentage applied to the pricing plan.
   * @type {number}
   */
  discount: number;

  /**
   * Description of the pricing plan.
   * @type {string}
   */
  description: string;

  /**
   * List of features included in the pricing plan.
   * @type {string[]}
   */
  features: string[];
  /** Custom button properties for the pricing plan. */
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
    title: "Basic",
    popular: false,
    price: 0,
    discount: 10,
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
    title: "Standerd",
    popular: true,
    price: 49,
    discount: 10,
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
    title: "Enterprise",
    popular: false,
    price: 99,
    discount: 10,
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

export const plansTableData = [
  {
    feature: "15-days free trial",
    starter: {
      available: true,
      addon: false,
    },
    pro: {
      available: true,
      addon: false,
    },
    enterprise: {
      available: true,
      addon: false,
    },
  },
  {
    feature: "No user limit",
    starter: {
      available: false,
      addon: false,
    },
    pro: {
      available: false,
      addon: false,
    },
    enterprise: {
      available: true,
      addon: false,
    },
  },
  {
    feature: "Product Support",
    starter: {
      available: false,
      addon: false,
    },
    pro: {
      available: true,
      addon: false,
    },
    enterprise: {
      available: true,
      addon: false,
    },
  },
  {
    feature: "Email Support",
    starter: {
      available: false,
      addon: false,
    },
    pro: {
      available: true,
      addon: true,
    },
    enterprise: {
      available: true,
      addon: false,
    },
  },
  {
    feature: "Integrations",
    starter: {
      available: false,
      addon: false,
    },
    pro: {
      available: true,
      addon: false,
    },
    enterprise: {
      available: true,
      addon: false,
    },
  },
  {
    feature: "Removal of Front branding",
    starter: {
      available: false,
      addon: false,
    },
    pro: {
      available: true,
      addon: true,
    },
    enterprise: {
      available: true,
      addon: false,
    },
  },
  {
    feature: "Active maintenance & support",
    starter: {
      available: false,
      addon: false,
    },
    pro: {
      available: false,
      addon: false,
    },
    enterprise: {
      available: true,
      addon: false,
    },
  },
  {
    feature: "Data storage for 365 days",
    starter: {
      available: false,
      addon: false,
    },
    pro: {
      available: false,
      addon: false,
    },
    enterprise: {
      available: true,
      addon: false,
    },
  },
];

export const FAQs = [
  {
    title: "Pricing Plans",
    description:
      "Explore our flexible pricing plans designed to meet your needs. Discover the features and benefits of each plan to find the best fit for you.",
  },
  {
    title: "Security",
    description:
      "Ensuring the safety of your information is our top priority. We implement robust security measures to protect your data and maintain a secure environment. Your trust and privacy are important to us.",
  },
  {
    title: "How To Get Started!",
    description:
      "Embark on your journey with us! Learn how to get started quickly and easily. Follow our step-by-step guide to make the most of your experience.",
  },
];
