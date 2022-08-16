import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { AiOutlineDown } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import Button from 'components/CommonStyles/Button';
import CommonIcons from 'components/icons';
import { useTranslation } from 'react-i18next';
import { SIZE_ICON } from 'constants';

const userMenu = ['Profile', 'Settings', 'Logout'];

const Header = ({ onClick, nofication, name, onClickBack }) => {
  const { t } = useTranslation();
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
      padding: '10px 0',
      background: 'transparent',
      width: '100%',
    },
  };

  return (
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
        <Button
          type="primary"
          innerText={t('message:add')}
          onClick={onClick}
          icon={<HiPlus />}
          borderRadius="round"
          style={buttonStyle['Button-2']}
        />
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
            onClick={() => setDropdown(!dropDown)}
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
          <div className={dropDown ? 'userMenu' : 'userMenu-disable'}>
            {dropDown &&
              userMenu.map((item, index) => (
                <Button
                  innerText={item}
                  type="secondary"
                  onClick={onClick}
                  key={index}
                  style={buttonStyle['Button-4']}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
