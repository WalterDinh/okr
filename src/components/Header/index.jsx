import React, { Fragment, useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { AiOutlineDown } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import Button from 'components/CommonStyles/Button';
import CommonIcons from 'components/icons';
import { useTranslation } from 'react-i18next';
import { SIZE_ICON } from 'constants';

const userMenu = [
  {
    name: 'Profile',
    onClick: () => {},
  },
  {
    name: 'Settings',
    onClick: () => {},
  },
  {
    name: 'Logout',
    onClick: () => {},
  },
];

const Header = ({ onClick, nofication, name, onClickBack }) => {
  //! State
  const { t } = useTranslation();
  console.log(useTranslation());
  const [dropDown, setDropdown] = useState(false);
  const isBack = typeof onClickBack !== 'undefined';

  const buttonStyle = {
    'Button-1': {
      border: '0',
      fontSize: '30px',
      padding: '0',
      minWidth: '0',
    },
    'Button-2': {
      padding: '8px 16px',
      border: '0',
      minHeight: 'unset',
    },
    'Button-3': {
      flexDirection: 'row-reverse',
      border: 0,
      background: 'transparent',
      minWidth: '120px',
    },
    'Button-4': {
      border: '0',
      borderTop: 'solid 1px #C4C4C4',
      padding: '10px 0',
      background: 'transparent',
      width: '100%',
    },
  };
  //! Function

  //! Render
  return (
    <Fragment>
      <div
        className="header2"
        style={{
          justifyContent: isBack ? 'space-between' : 'right',
        }}
      >
        {isBack && (
          <div className="left">
            <Button
              onClick={onClickBack}
              innerText=""
              icon={<BiArrowBack />}
              type="secondary"
              style={buttonStyle['Button-1']}
            ></Button>
          </div>
        )}
        <div className="right">
          <div className="addBtn">
            <Button
              type="primary"
              innerText={t('messages:add')}
              onClick={onClick}
              icon={<HiPlus />}
              borderRadius="round"
              style={buttonStyle['Button-2']}
            />
          </div>
          <div className="utilities">
            <CommonIcons.Clock size={SIZE_ICON} />
            <div className="bell">
              {nofication && <div className="notification">{nofication}</div>}
              <CommonIcons.Bell size={SIZE_ICON} />
            </div>
          </div>
          <div className="user">
            <div className="avatar"></div>
            <Button
              innerText={name}
              onClick={() => {
                setDropdown(!dropDown);
              }}
              icon={
                dropDown ? (
                  <AiOutlineDown
                    style={{
                      transform: 'rotate(180deg)',
                      transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    }}
                  />
                ) : (
                  <AiOutlineDown
                    style={{
                      transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    }}
                  />
                )
              }
              type="secondary"
              style={buttonStyle['Button-3']}
            ></Button>
          </div>
        </div>
      </div>
      <div className={dropDown ? 'userMenu' : 'userMenu-disable'}>
        {dropDown ? (
          <Fragment>
            <div className="dropDown-btn">
              <Button
                type="primary"
                innerText={t('messages:add')}
                onClick={onClick}
                icon={<HiPlus />}
                borderRadius="round"
                style={{ width: '100%' }}
              />
            </div>
            {userMenu.map((item, index) => (
              <Button
                innerText={item.name}
                type="secondary"
                onClick={item.onClick}
                key={index}
                style={buttonStyle['Button-4']}
              />
            ))}
          </Fragment>
        ) : (
          ''
        )}
      </div>
    </Fragment>
  );
};

export default Header;
