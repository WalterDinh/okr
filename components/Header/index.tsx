import React, { Fragment, useEffect } from "react";
import LinkNext from "next/link";
import { Link } from "react-scroll";
import Navbar from "../../components/Navbar";
import { isSafariBrowser as isSafariBrowserUltis } from "helpers";

const listMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "about-us",
  },
];

const logo = "/assets/logo.png";

let isSafariBrowser = (): any => {};

const Menu = () => {
  useEffect(() => {
    isSafariBrowser = isSafariBrowserUltis;
  }, []);

  return (
    <div className="container navbar">
      <div className="navbar__logo">
        <LinkNext href="/">
          <img src={logo} alt="logo" />
        </LinkNext>
      </div>
      <div className="navbar__items">
        {listMenu.map((menu) => {
          if (menu.path.includes("/")) {
            return (
              <LinkNext key={menu.path} href={menu.path}>
                <div className="navbar__item">{menu.name}</div>
              </LinkNext>
            );
          }
          return (
            <Link
              key={menu.path}
              activeClass="active"
              to={menu.path}
              spy={true}
              smooth={true}
              duration={isSafariBrowser() ? 1000 : 0}
            >
              <div className="navbar__item ">{menu.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

interface ItemWithHandleClickI {
  onClick: () => void;
  item: {
    name: string;
    path: string;
  };
}

const ItemWithHandleClick: React.FC<ItemWithHandleClickI> = React.forwardRef(
  function Component({ onClick, item }, ref: any) {
    return (
      <div className="navbar__item humburger" onClick={onClick} ref={ref}>
        {item.name}
      </div>
    );
  }
);

interface MenuHumburgerI {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuHumburger: React.FC<MenuHumburgerI> = ({ setIsActive }) => {
  const renderListLink = listMenu.map((menu) => {
    if (menu.path.includes("/")) {
      return (
        <LinkNext key={menu.name} href={menu.path} passHref>
          <ItemWithHandleClick onClick={() => setIsActive(false)} item={menu} />
        </LinkNext>
      );
    }

    return (
      <Link
        key={menu.path}
        activeClass="active"
        to={menu.path}
        spy={true}
        smooth={true}
        duration={isSafariBrowser() ? 1000 : 0}
        onClick={() => setIsActive(false)}
      >
        <div className="navbar__item humburger">{menu.name}</div>
      </Link>
    );
  });

  return <Fragment>{renderListLink}</Fragment>;
};

const WrapHumburger = () => {
  return (
    <div className="navbar__logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

const Header = () => {
  return (
    <Navbar
      renderHamburgerWrap={() => {
        return <WrapHumburger />;
      }}
      renderMenu={() => {
        return <Menu />;
      }}
      renderHamburgerMenu={(setIsActive) => {
        return <MenuHumburger setIsActive={setIsActive} />;
      }}
    />
  );
};

export default Header;
