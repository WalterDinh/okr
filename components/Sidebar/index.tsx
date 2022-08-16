import React, { useState } from "react";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AssessmentIcon from "@mui/icons-material/Assessment";
import QuizIcon from "@mui/icons-material/Quiz";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const lists = [
  { id: 1, title: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { id: 2, title: "Check-in", path: "/checkin", icon: <FactCheckIcon /> },
  { id: 3, title: "OKRs", path: "/okrs", icon: <CollectionsBookmarkIcon /> },
  { id: 4, title: "CFRs", path: "/cfrs", icon: <QuestionAnswerIcon /> },
  { id: 5, title: "Report", path: "/report", icon: <AssessmentIcon /> },
  { id: 6, title: "Quiz", path: "/quiz", icon: <QuizIcon /> },
];

const Sidebar: React.FC = () => {
  const [click, setClick] = useState(false);

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
                  <span className="sidebar-icon">{list?.icon}</span>
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
        {click ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>
    </>
  );
};

export default Sidebar;
