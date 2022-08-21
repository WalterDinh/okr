import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, useHistory } from 'react-router-dom';
import { RouteBase } from 'constants/routeUrl';
import { menuDefault, menuSettings } from 'constants/menuSidebar';
import { useMemo } from 'react';

const Sidebar = () => {
  //! State
  const [click, setClick] = useState(false);
  const history = useHistory();
  const pathname = history.location.pathname;

  const menu = useMemo(() => {
    if (pathname.includes(RouteBase.Setting)) {
      return menuSettings;
    }

    return menuDefault;
  }, [pathname]);

  //! Function
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setClick(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //! Render
  return (
    <>
      <div className={click ? 'sidebar-container active' : 'sidebar-container'}>
        <div className="sidebar-top">
          <NavLink to="/">
            <h1>Okrs Online</h1>
          </NavLink>
        </div>
        <div className="sidebar-bottom">
          {menu?.map((list) => {
            return (
              <NavLink to={list.path} key={list.id}>
                <div className="sidebar-bottom-item">
                  <span className="sidebar-icon">
                    <img src={list.src} alt="lanscape" />
                  </span>

                  <span>{list.title}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className={click ? 'hamburger active' : 'hamburger '} onClick={() => setClick(!click)}>
        {click ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>
    </>
  );
};

export default Sidebar;
