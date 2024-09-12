import NewsNavbar from "./NewsNavbar";
import News from "./News";
import Advertising from "./Advertising";
import ExchangeRate from "./ExchangeRate";

const advProps = {
    text: "Путин упростил получение номеров",
    icon: "image",
}
/**
 * A simple component that displays a header.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function Header(): JSX.Element {
  
 

    return (
      
        <div>
            <NewsNavbar></NewsNavbar>
            <News></News>
            <ExchangeRate></ExchangeRate>
            <Advertising {...advProps}></Advertising>
        </div>
          
      
    );
  }