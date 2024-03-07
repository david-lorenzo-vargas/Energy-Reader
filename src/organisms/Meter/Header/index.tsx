import { ReactElement } from "react";

import Logo from "../../../icons/Logo";

const Header = (): ReactElement => {
  return (
    <div data-testid="logo">
      <Logo size="100"/>
    </div>
  );
};

export default Header;
