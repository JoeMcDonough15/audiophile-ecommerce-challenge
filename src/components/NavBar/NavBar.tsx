import { NavLink } from "react-router-dom";
import "./nav-bar.sass";
import { ROUTE_PATHS } from "../constants";

interface Props {
  className: string;
}

const NavBar = ({ className }: Props): JSX.Element => {
  return (
    <nav className={className}>
      <NavLink className="nav-link" to={"/"}>
        Home
      </NavLink>
      <NavLink
        className="nav-link"
        to={`/${ROUTE_PATHS.CATEGORY}/${ROUTE_PATHS.HEADPHONES}`}
      >
        Headphones
      </NavLink>
      <NavLink
        className="nav-link"
        to={`/${ROUTE_PATHS.CATEGORY}/${ROUTE_PATHS.SPEAKERS}`}
      >
        Speakers
      </NavLink>
      <NavLink
        className="nav-link"
        to={`/${ROUTE_PATHS.CATEGORY}/${ROUTE_PATHS.EARPHONES}`}
      >
        Earphones
      </NavLink>
    </nav>
  );
};

export default NavBar;
