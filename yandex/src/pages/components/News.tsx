
import NewsItem from "./NewsItem";

const itemProps = {
    text: "Путин упростил получение номеров",
    icon: "image",
}
/**
 * A simple component that displays a list of news items.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */
export default function News(): JSX.Element {
    return (
        <div>
            <NewsItem {...itemProps}></NewsItem>
            <NewsItem {...itemProps}></NewsItem>
            <NewsItem {...itemProps}></NewsItem>
            <NewsItem {...itemProps}></NewsItem>
        </div>
    );
}