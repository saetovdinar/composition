import styles from './app.module.css';
import Card from './Card';
import Img from '../../img/preview.png'

export default function App(): JSX.Element {
  
  const cardProps = {
    img: Img,
    title: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    btn_descr: 'Go somewhere',
  }

  return (
    <div className={styles.container}>
      <Card {...cardProps}/>
      <Card {...cardProps} img='' title='Special type' description='another descr'/>
    </div>
  );
}