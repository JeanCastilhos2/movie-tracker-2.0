import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png"

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className={Styles.navbar} id="navbar">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
