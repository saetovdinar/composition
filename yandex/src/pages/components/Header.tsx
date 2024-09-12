import NewsNavbar from "./NewsNavbar";
import News from "./News";
import Advertising from "./Advertising";
import ExchangeRate from "./ExchangeRate";

export default function Header() {
  
 

    return (
      
        <div>
            <NewsNavbar></NewsNavbar>
            <News></News>
            <ExchangeRate></ExchangeRate>
            <Advertising></Advertising>
        </div>
          
      
    );
  }