import { Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";
import HeaderLink from "../HeaderLink";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="./"> 
        <img src={logo} className={styles.logo} alt="Logo do cinetag" />
      </Link> 
      <nav>
        <HeaderLink url='./'>
          Home
        </HeaderLink>

        <HeaderLink url='./favorites'>
          Favorites
        </HeaderLink>
      </nav>
    </header>
  );
}

export default Header;