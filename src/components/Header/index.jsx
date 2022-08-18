import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import useSagaCreators from 'hooks/useSagaCreators';

import Button from 'components/CommonStyles/Button';
import CommonIcons from 'components/icons';
import { SIZE_ICON } from 'constants';
import { RouteBase } from 'constants/routeUrl';
import { authActions } from 'redux/modules/auth';

const Header = ({ onClick, nofication, name, onClickBack }) => {
  //! State
  const { t } = useTranslation();
  const history = useHistory();
  const { dispatch } = useSagaCreators();
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
      padding: '16px',
      background: 'transparent',
      width: '100%',
      justifyContent: 'left',
    },
  };

  const userMenu = [
    {
      name: t('common:setting'),
      icon: <CommonIcons.Setting size={20} style={{ color: 'rgba(0,0,0,0.5)' }} />,
      onClick: () => {},
    },
    {
      name: t('common:user-profile'),
      icon: <CommonIcons.User size={20} style={{ color: 'rgba(0,0,0,0.5)' }} />,
      onClick: () => history.push(RouteBase.UserProfile),
    },
    {
      name: t('common:logout'),
      icon: <CommonIcons.Logout size={20} style={{ transform: 'rotate(-90deg)', color: 'rgba(0,0,0,0.5)' }} />,
      onClick: () => {
        dispatch(authActions.logout);
      },
    },
  ];
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
              icon={<CommonIcons.Back />}
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
              icon={<CommonIcons.Add />}
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
                  <CommonIcons.Down
                    style={{
                      transform: 'rotate(180deg)',
                      transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    }}
                  />
                ) : (
                  <CommonIcons.Down
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
                icon={<CommonIcons.Add />}
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
                icon={item.icon}
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
