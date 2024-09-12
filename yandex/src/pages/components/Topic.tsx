interface topicProps {
    title: string;
    image: string;
    text: string[];
}

/**
 * A simple component that displays advertising.
 *
 * @param {{ title: string, image: string, text: string[] }} props The properties of the component.
 * @returns {JSX.Element} The JSX element representing the component.
 */

export default function Advertising(props: topicProps): JSX.Element {
  
 

    return (
      
        <div style={ {border: "1px solid black", padding: "10px"}}>
            <p style={{fontWeight: "bold"}}>{props.title}</p>
            <p>{props.image}</p>
            <ul>
                {props.text.map((item: string, index: number) => 
                     <li key={index}>{item}</li>
                )
                }
            </ul> 
            
        </div>
          
      
    );
  }