import Currency from "./Currency";

const currencyProps = {
    currency: "USD",
    price: 100,
    change: +0.5,

}
    

/**
 * A simple component that displays a list of exchange rates.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function ExchangeRate() {
  
 

    return (
      
        <div  >
            <Currency {...currencyProps}></Currency>
            <Currency {...currencyProps}></Currency>
            <Currency {...currencyProps}></Currency>
        </div>
          
      
    );
  }