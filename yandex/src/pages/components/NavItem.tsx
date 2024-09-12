


/**
 * A simple component that displays a navigation item.
 *
 * @param {{ children:  React.PropsWithChildren }} props The properties of the component.
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function NavItem({children}: React.PropsWithChildren): JSX.Element {
  
 

    return (
      
        <div>
            {children}
        </div>
          
      
    );
  }