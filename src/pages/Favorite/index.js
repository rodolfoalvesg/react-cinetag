import styles from './Favorite.module.css';
import bannerfavoritos from "assets/images/banner-favoritos.png";
import Title from "components/Title";
import Banner from "components/Banner";
import Card from 'components/Card';
import { useFavorite } from 'context/favorite';

function Favorite() {
    const {favorite} = useFavorite();
    return (
        <>
            <Banner image={bannerfavoritos}/>
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {
                    favorite.map((item) => (
                        <Card {...item} key={item.id}/>
                    ))
                }
            </section>
        </>
    );
}

export default Favorite;