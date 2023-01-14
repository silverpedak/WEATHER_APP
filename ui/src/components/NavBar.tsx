import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

import { ReactComponent as BurgerSvg } from "../assets/images/list.svg";

const NavBar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="shadow-lg" expand="sm" container="xl">
        <NavbarBrand tag={Link} to="/">
          Weather
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <BurgerSvg style={{ width: "35px", height: "35px" }} />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};
export default NavBar;
