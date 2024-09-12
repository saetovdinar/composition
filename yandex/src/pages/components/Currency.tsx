
interface currencyProps {
    currency: string;
    price: number;
    change: number;
}

/**
 * A simple component that displays a currency.
 *
 * @param {{ currency: string, price: number, change: number }} props The properties of the component.
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function Currency(props: currencyProps): JSX.Element {
  
 

    return (
      
        <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
            <p>{props.currency}</p> 
            <p>{props.price}</p> 
            <p>{props.change}</p>
        </div>
          
      
    );
  }