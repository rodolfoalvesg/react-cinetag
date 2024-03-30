import styles from './NotFound.module.css';

function NotFound() {
    return (
        <section className={styles.container}>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
        </section>
    );
}

export default NotFound;