import styles from './Banner.module.css';

function Banner({image}) {
  return (
    <div>
      <img className={styles.banner} src={image} alt="Banner" />
    </div>
  );
}

export default Banner;