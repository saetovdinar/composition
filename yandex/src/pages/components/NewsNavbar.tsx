import NavDate from "./NavDate";
import NavItem from "./NavItem";

/**
 * A simple component that displays a navigation bar for news items.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function NewsNavbar(): JSX.Element {
  
 

    return (
      
        <div style={{display: "flex", flexDirection: "row"}}>
            <NavItem>Now in SMI</NavItem>
            <NavItem>in Germany</NavItem>
            <NavItem>Recommended</NavItem>
            <NavDate>12.06.1998</NavDate>
        </div>
          
      
    );
  }