import React, { useEffect, useState, useCallback, Fragment, ReactNode, ReactChild, ReactFragment, Dispatch, SetStateAction } from "react";
import global from "window-or-global";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface DZBNavbarI {
  renderMenu: (arg: Dispatch<SetStateAction<boolean>>) => ReactNode,
  renderHamburgerMenu: (arg: Dispatch<SetStateAction<boolean>>) => ReactNode,
  renderHamburgerWrap: (arg: Dispatch<SetStateAction<boolean>>) => ReactNode
}

const DZBNavbar: React.FC<DZBNavbarI> = ({
  renderMenu,
  renderHamburgerMenu,
  renderHamburgerWrap,
  //   bgColorNavbar,
  //   bgColorHumburger,
  //   colorLine,
}) => {
  const [isActive, setIsActive] = useState(false);

  // Effect scroll
  useEffect(() => {
    let nextValue = 0;
    const onScroll = () => {
      const humbugerWrap = document.querySelector(".dzb-hamburger-wrap") as any;
      const top = global.window.scrollY + 71;
      humbugerWrap.style.top = `${top}px`;

      // Scroll to display navbar
      const currentValue =
        window.pageYOffset || document.documentElement.scrollTop;
      // Add animation
      const NavbarDOM = document.querySelector(".dzb-navbar") as any;
      NavbarDOM.style.transition = "transform .3s";
      if (currentValue > 100) {
        if (currentValue > nextValue) {
          // scroll down
          NavbarDOM.style.transform = "translateY(-80px)";
        } else {
          // scroll up
          NavbarDOM.style.transform = "translateY(0px)";
        }
      } else {
        NavbarDOM.style.transform = "translateY(0px)";
      }
      nextValue = currentValue <= 0 ? 0 : currentValue;
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    // overflow hidden
    if (isActive) {
      // document.body.classList.add('active');
      disableBodyScroll(document.body);
    } else {
      clearAllBodyScrollLocks();
    }

    const updateOnResize = (event: any) => {
      const browserWidth = event.target.innerWidth;
      if (browserWidth > 768) {
        if (isActive) {
          setIsActive(false);
        }
      }
    };
    window.addEventListener("resize", updateOnResize);
    return () => {
      window.removeEventListener("resize", updateOnResize);
    };
  }, [isActive]);

  const toggle = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <Fragment>
      <div className={`dzb-navbar ${isActive ? "active" : ""}`}>
        <div className="dzb-navbar-wrap">{renderMenu(setIsActive)}</div>
        <div className="dzb-hamburger">{renderHamburgerWrap(setIsActive)}</div>
        <div className="dzb-hamburger-menu" onClick={toggle}>
          <div className="dzb-hamburger-line" />
        </div>
      </div>
      <div className={`dzb-hamburger-wrap ${isActive ? "active" : ""}`}>
        {renderHamburgerMenu(setIsActive)}
      </div>
    </Fragment>
  );
};

export default React.memo(DZBNavbar);
