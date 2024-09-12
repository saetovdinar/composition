
interface AdvertisingProps {

    text: string
    icon: string
}

/**
 * A simple component that displays advertising.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function Advertising(props: AdvertisingProps): JSX.Element {
  
 

    return (
      
        <div>
            <p>{props.icon}</p>
            <p>{props.text}</p> 
        </div>
          
      
    );
  }