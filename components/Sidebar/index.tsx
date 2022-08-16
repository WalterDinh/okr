import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CommonIcons from "components/icons";

import Dashborad from "../../public/assets/dashboard.png";
import Checkin from "../../public/assets/checkin.png";
import Comment from "../../public/assets/b-comment.png";
import Okrs from "../../public/assets/okrs.png";
import Report from "../../public/assets/report.png";
import Quiz from "../../public/assets/quiz.png";

const lists = [
  { id: 1, title: "Dashboard", path: "/dashboard", src: Dashborad },
  { id: 2, title: "Check-in", path: "/checkin", src: Checkin },
  { id: 3, title: "OKRs", path: "/okrs", src: Okrs },
  { id: 4, title: "CFRs", path: "/cfrs", src: Comment },
  { id: 5, title: "Report", path: "/report", src: Report },
  { id: 6, title: "Quiz", path: "/quiz", src: Quiz },
];

const Sidebar: React.FC = () => {
  //! State
  const [click, setClick] = useState(false);

  //! Function
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setClick(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //! Render
  return (
    <>
      <div className={click ? "sidebar-container active" : "sidebar-container"}>
        <div className="sidebar-top">
          <Link href="/" passHref>
            <h1>Okrs Online</h1>
          </Link>
        </div>
        <div className="sidebar-bottom">
          {lists.map((list) => {
            return (
              <Link href={list.path} key={list.id} passHref>
                <div className="sidebar-bottom-item">
                  <span className="sidebar-icon">
                    <Image src={list.src} alt="Landscape picture" />
                  </span>

                  <span>{list.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={click ? "hamburger active" : "hamburger "}
        onClick={() => setClick(!click)}
      >
        {click ? <CommonIcons.Close /> : <CommonIcons.MenuIcon />}
      </div>
    </>
  );
};

export default Sidebar;
