import styles from './Card.module.css'
import unlike from '../../assets/images/unlike.png';
import like from '../../assets/images/like.png';
import { useFavorite } from 'context/favorite';
import { Link } from 'react-router-dom';

function Card({...props}){
    const {favorite, addFavorite} = useFavorite();
    const isFavorite = favorite.some((item) => item.id === props.id);
    const favoriteIcon = isFavorite ? like : unlike;
    return(
        <div className={styles.container}>
            {props.children}
            <Link className={styles.link} to={`/${props.id}`}>
                <img src={props.cover} alt={props.title} className={styles.cover}/>
                <h2>{props.title}</h2>
            </Link>
            <img src={favoriteIcon}
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => addFavorite({
                    id: props.id,
                    title: props.title,
                    cover: props.cover
                })}
            />
        </div>
    );
}

export default Card;