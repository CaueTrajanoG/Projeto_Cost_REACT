import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs-logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/newproject">New Project</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
