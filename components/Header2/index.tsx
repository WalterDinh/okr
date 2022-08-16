import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import Button from "components/Button";

const userMenu = ["Profile", "Settings", "Logout"];

interface Header2I {
  onClick: () => void;
  nofication?: number;
  name: string;
  onClickBack?: () => void;
}

const Header2: React.FC<Header2I> = ({
  onClick,
  nofication,
  name,
  onClickBack,
}) => {
  const [dropDown, setDropdown] = useState<boolean>(false);
  console.log(dropDown);
  return (
    <div
      className="header2"
      style={{
        justifyContent:
          typeof onClickBack !== "undefined" ? "space-between" : "right",
      }}
    >
      {typeof onClickBack !== "undefined" && (
        <div className="left">
          <Button
            onClick={onClickBack}
            innerText=""
            icon={<BiArrowBack />}
            type="secondary"
            style={{ border: "0", fontSize: "30px", padding: "0" }}
          ></Button>
        </div>
      )}
      <div className="right">
        <Button
          type="primary"
          innerText="Thêm mới"
          onClick={onClick}
          icon={<HiPlus />}
          borderRadius="round"
          style={{ padding: "8px 16px", border: "0" }}
        />
        <div className="utilities">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 7V12H17"
              stroke="#212121"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M3 23L6.132 18.824"
              stroke="#212121"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="#212121"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="square"
            />
            <path
              d="M1 6L6 1"
              stroke="#212121"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M17.868 18.824L21 23"
              stroke="#212121"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M23 6L18 1"
              stroke="#212121"
              stroke-width="2"
              stroke-miterlimit="10"
            />
          </svg>
          <div className="bell">
            {nofication && <div className="notification">{nofication}</div>}
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 11V8C18 6.14348 17.2625 4.36301 15.9497 3.05025C14.637 1.7375 12.8565 1 11 1C9.14348 1 7.36301 1.7375 6.05025 3.05025C4.7375 4.36301 4 6.14348 4 8V11C4 14.3 1 15.1 1 17C1 18.7 4.9 20 11 20C17.1 20 21 18.7 21 17C21 15.1 18 14.3 18 11Z"
                stroke="#212121"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M11 21.9999C9.98902 21.9999 9.03902 21.9659 8.14502 21.8999C8.33561 22.5079 8.71532 23.0391 9.22883 23.4163C9.74235 23.7935 10.3629 23.9969 11 23.9969C11.6372 23.9969 12.2577 23.7935 12.7712 23.4163C13.2847 23.0391 13.6644 22.5079 13.855 21.8999C12.961 21.9659 12.011 21.9999 11 21.9999Z"
                fill="#212121"
              />
            </svg>
          </div>
        </div>
        <div className="user">
          <div className="avatar"></div>
          <Button
            innerText={name}
            onClick={() => setDropdown(!dropDown)}
            icon={
              dropDown ? (
                <AiOutlineDown
                  style={{
                    transform: "rotate(180deg)",
                    transition:
                      "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                />
              ) : (
                <AiOutlineDown
                  style={{
                    transition:
                      "all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                />
              )
            }
            type="secondary"
            style={{
              flexDirection: "row-reverse",
              border: 0,
              background: "transparent",
              minWidth: "120px",
            }}
          ></Button>
          <div className={dropDown ? "userMenu" : "userMenu-disable"}>
            {dropDown &&
              userMenu.map((item, index) => (
                <Button
                  innerText={item}
                  type="secondary"
                  onClick={() => {}}
                  key={index}
                  style={{
                    border: "0",
                    padding: "10px 0",
                    background: "transparent",
                    width: "100%",
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
