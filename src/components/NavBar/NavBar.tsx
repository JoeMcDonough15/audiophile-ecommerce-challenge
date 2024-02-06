import { NavLink } from "react-router-dom";
import "./nav-bar.sass";

interface Props {
  className: string;
}

const NavBar = ({ className }: Props): JSX.Element => {
  return (
    <nav className={className}>
      <NavLink className="nav-link" to={"/"} exact>
        Home
      </NavLink>
      <NavLink className="nav-link" to={"/category/headphones"}>
        Headphones
      </NavLink>
      <NavLink className="nav-link" to={"/category/speakers"}>
        Speakers
      </NavLink>
      <NavLink className="nav-link" to={"/category/earphones"}>
        Earphones
      </NavLink>
    </nav>
  );
};

export default NavBar;
