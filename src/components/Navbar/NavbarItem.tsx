/**
 * React component items in navbar container <Navbar.Item />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { useLocation } from "@reach/router";

import { NavbarContext } from "./context";
import { StyledNavbarItem } from "./style";
import { NavbarItemProps } from "./type";

const NavbarItem: React.FC<NavbarItemProps> = ({ id = "", children, ...rest }) => {
  const navbarContext = React.useContext(NavbarContext);

  const location = useLocation();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const mainPath = location.pathname.split("/")[1];

    if (id === mainPath) {
      setActive(true);
      navbarContext.toggleActiveTab(id);
    } else {
      setActive(false);
    }
  }, [id, location, navbarContext]);

  return (
    <StyledNavbarItem id={id} className={active && "active"} {...rest}>
      {children}
    </StyledNavbarItem>
  );
};

export default NavbarItem;
