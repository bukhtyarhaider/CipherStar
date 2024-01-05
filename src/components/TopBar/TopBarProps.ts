/**
 * Interface for the TopBar component props.
 */
interface TopBarProps {
    /**
     * An array of navigation items containing a name and URL.
     */
    navItems: Array<{ name: string; url: string }>;
  }
  
  export default TopBarProps;