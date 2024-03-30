import styles from './Main.module.css';

function Main({children}){
    return (
        <section className={styles.container}>
            {children}
        </section>
    );
}

export default Main;

