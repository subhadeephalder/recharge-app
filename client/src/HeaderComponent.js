import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import SignupComponent from './SignupComponent';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
       <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Recharge Portal</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="./Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./Signup">Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./Login">Login</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;