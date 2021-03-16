import React from 'react';
import { Dropdown, Button, NavItem } from 'react-bootstrap';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { useViewport } from '../../useViewport/useViewport';

export const NavigationDropdown = (props) => {
  const { t } = useTranslation();
  const { width, breakpoints } = useViewport();
  const isMobile = width < breakpoints.xl;
  const asset = require.context('../../../assets/images/navigation', true);

  return (
    <Dropdown>
      <NavHashLink to={props.data.link}>
        <Dropdown.Toggle as={NavItem}>{t(props.data.title)}</Dropdown.Toggle>
      </NavHashLink>
      <Dropdown.Menu className="py-xl-5 px-4">
        {isMobile && (
          <Dropdown.Toggle as={NavItem} className="dropdown-toggle-overlay">
            {t(props.data.title)}
          </Dropdown.Toggle>
        )}
        <div className="dropdown-row">
          {props.data.list.map((item, index) => {
            const DropdownItemChild = (item, name = '') => {
              if (item.match(/\.\/.+(\.png|\.jpg)/)) {
                return <img className="image" src={asset(item).default} alt={name}></img>;
              } else {
                return <p className="text">{item}</p>;
              }
            };

            return (
              <Dropdown.Item href={item.link} className="p-0 m-1 mx-xl-5" key={index}>
                {item.top && (
                  <div className="dropdown-top">
                    {DropdownItemChild(t(item.top), `${item.name} product`)}
                  </div>
                )}
                {item.bottom && (
                  <div className="dropdown-bottom">
                    {DropdownItemChild(t(item.bottom), `${item.name} title`)}
                  </div>
                )}
              </Dropdown.Item>
            );
          })}
        </div>
        {!isMobile && props.data.all && (
          <HashLink to={props.data.all.link}>
            <Button variant="outline-secondary" className="btn-round mt-5">
              {t(props.data.all.text)}
            </Button>
          </HashLink>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
