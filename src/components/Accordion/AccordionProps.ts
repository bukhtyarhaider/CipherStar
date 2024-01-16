/**
 * Props for the Accordion component.
 */
export interface AccordionProps {
  /**
   * The title of the accordion.
   */
  title: string;

  /**
   * The content to be displayed inside the accordion body.
   */
  description: string;

  /**
   * Flag to determine if the accordion is open or closed.
   */
  isAccordionOpen: boolean;

  /**
   * Event handler for the accordion click.
   */
  onClick?: () => void;
}
