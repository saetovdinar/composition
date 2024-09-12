
interface  NewsItemProps{
    text: string;
    icon: string;
}

/**
 * A simple component that displays a news item.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function NewsItem(props: NewsItemProps): JSX.Element {
  
 

    return (
      
        <div style={{display: "flex", flexDirection: "row"}}>
            <div>{props.icon}</div>
            <div>{props.text}</div>
        </div>
          
      
    );
  }