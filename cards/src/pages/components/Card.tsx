
import { StaticImageData } from 'next/image'
import styles from './card.module.css'

interface cardProps  {
    img: any
    title: string
    description: string
    btn_descr: string
    
  }


export default function Card(props: cardProps): JSX.Element {
  
 

    return (
      
        <div className={styles.card} >
            {props.img && <img src={props.img.src} className={styles.card_img_top} alt="..."/>}
            <div className={styles.card_body}>
                <h5 className={styles.card_title}>{props.title}</h5>
                <p className={styles.card_text}>{props.description}</p>
                <a href="#" className={styles.btn_primary}>{props.btn_descr}</a>
            </div>
        </div>
          
      
    );
  }