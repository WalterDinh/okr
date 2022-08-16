import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Dashboard from 'assets/dashboard.png';
import Checkin from 'assets/checkin.png';
import Comment from 'assets/b-comment.png';
import Okrs from 'assets/okrs.png';
import Report from 'assets/report.png';
import Quiz from 'assets/quiz.png';
import { NavLink } from 'react-router-dom';
import { RouteBase } from 'constants/routeUrl';

const lists = [
  { id: 1, title: 'Dashboard', path: RouteBase.Dashboard, src: Dashboard },
  { id: 2, title: 'Check-in', path: RouteBase.Checkin, src: Checkin },
  { id: 3, title: 'OKRs', path: '/okrs', src: Okrs },
  { id: 4, title: 'CFRs', path: '/cfrs', src: Comment },
  { id: 5, title: 'Report', path: '/report', src: Report },
  { id: 6, title: 'Quiz', path: '/quiz', src: Quiz },
];

const Sidebar = () => {
  //! State
  const [click, setClick] = useState(false);

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
          {lists.map((list) => {
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
