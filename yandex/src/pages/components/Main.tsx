import Advertising from "./Advertising";
import MainNavbar from "./MainNavbar";
import SearchForm from "./SearchForm";
import TopicsCont from "./TopicsCont";

const advProps = {
    text: "Путин упростил получение номеров",
    icon: "image",
}

/**
 * A simple component that displays the main page of the app.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function Main(): JSX.Element {
  
 

    return (
      
        <div>
            <MainNavbar></MainNavbar>
            <SearchForm></SearchForm>
            <Advertising {...advProps} text=""></Advertising>
            <TopicsCont></TopicsCont>
        </div>
          
      
    );
  }