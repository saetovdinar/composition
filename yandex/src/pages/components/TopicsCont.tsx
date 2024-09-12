
import Topic from "./Topic";


/**
 * A simple component that displays a list of topics.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function TopicsCont(): JSX.Element {
  
 

    return (
      
        <div style={{display: "flex", flexDirection: "row", gap: "10px"}}>
            <Topic  text={["Утром +12", "Вечером +12"]}  title="Погода" image="image"></Topic>
            <Topic  text={["Расписание"]} title="Карта Германии"  image="image"></Topic>
            <Topic  text={["Управление как искусство", "Ночь. Мир в это время", "Вечер. Мир в это время"]} title="Эфир" image="image"></Topic>
            <Topic  text={["Недвижимость - о сталинках", "Маркет - продавцы", "Авто.ру - машины"]} title="Посещамое" image="image"></Topic>
            <Topic  text={["02:00 ТНТ", "02:30 СТС", "03:00 ТНТ"]} title="Телепрограмма" image="image"></Topic>
        </div>
          
      
    );
  }