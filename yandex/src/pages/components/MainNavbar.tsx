
import NavItem from "./NavItem";


/**
 * A simple component that displays a navigation bar for the main categories of
 * content on the site.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function MainNavbar(): JSX.Element {
  
 

    return (
      
        <div style={{color: "blue", display: "flex", flexDirection: "row", gap: "10px"}}>
            <NavItem>Video</NavItem>
            <NavItem>Images</NavItem>
            <NavItem>News</NavItem>
            <NavItem>Transater</NavItem>
            <NavItem>More</NavItem>
          
        </div>
          
      
    );
  }