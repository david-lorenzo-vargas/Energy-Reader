import { ReactElement } from "react";

import Logo from "../../../icons/Logo";

const Header = (): ReactElement => {
  return (
    <div data-testid="logo" className="relative h-20">
      <div className="absolute z-10 text-lightGray">
        <Logo size="100"/>
      </div>
      <div className="bg-orange w-100 h-10 absolute bottom-2"/>
    </div>
  );
};

export default Header;
