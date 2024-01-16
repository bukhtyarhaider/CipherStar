import { crossIcon, tickIcon } from "../../assets";
import { plansTableData } from "../../content";
import CustomButton from "../CutomButton/CustomButton";
import styles from "./PlansTableSection.module.scss";

/**
 * Props for the PlanCell component.
 * @interface PlanCellProps
 */
interface PlanCellProps {
  /**
   * Plan information.
   * @type {{
   *   addon: boolean;
   *   available: boolean;
   * }}
   */
  plan: {
    /**
     * Indicates if it's an add-on.
     * @type {boolean}
     */
    addon: boolean;

    /**
     * Indicates if the plan is available.
     * @type {boolean}
     */
    available: boolean;
  };
}

const PlanCell: React.FC<PlanCellProps> = ({ plan }) => {
  /**
   * Gets the content for the cell based on the plan information.
   * @function getContent
   * @returns {React.ReactElement} The content for the cell.
   */
  const getContent = () => {
    if (plan.addon) {
      return <p className={styles.addOn}>ADD-ON AVAILABLE</p>;
    }

    return plan.available ? (
      <img src={tickIcon} alt="Tick" />
    ) : (
      <img src={crossIcon} alt="Cross" />
    );
  };

  return <td>{getContent()}</td>;
};

const PlansTableSection = () => {
  return (
    <div className={styles.plansTableSectionContainer}>
      <h6>Pick a plan that works best for you</h6>
      <p className={styles.description}>
        Stay cool, we have a 48-hour money-back guarantee!
      </p>

      <div className={styles.tableWrapp}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                STARTER
                <p>Free</p>
              </th>
              <th>
                PRO
                <p>$7.5/Month</p>
              </th>
              <th>
                ENTERPRISE
                <p>$16/Month</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {plansTableData.map((plan, index) => (
              <tr key={index} className={index % 2 === 1 ? styles.evenRow : ""}>
                <td>{plan.feature}</td>
                <PlanCell plan={plan.starter} />
                <PlanCell plan={plan.pro} />
                <PlanCell plan={plan.enterprise} />
              </tr>
            ))}
            <tr className={styles.buttonsWrapp}>
              <td></td>
              <td>
                <CustomButton
                  title="Choose plan"
                  size="large"
                  color="default"
                  outLine
                />
              </td>
              <td>
                <CustomButton
                  title="Choose plan"
                  size="large"
                  color="default"
                />
              </td>
              <td>
                <CustomButton
                  title="Choose plan"
                  size="large"
                  color="default"
                  outLine
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlansTableSection;
