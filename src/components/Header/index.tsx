import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { useScroll } from '../../hooks/useScroll';

import { StyleProps, useStyles } from './styles';

const Header: React.FC = function() {
  const styleProps: StyleProps = {};
  const classes = useStyles(styleProps);

  const isTopScroll = useScroll();

  return (
    <header
      className={clsx({
        [classes.header]: true,
        [classes.headerScroll]: !isTopScroll,
      })}
    >
      <h4 className={classes.headerLogo}>
        Kovaleva Viktori
      </h4>

      <ul className={classes.headerMenu}>
        <li className={classes.headerMenuItem}>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li className={classes.headerMenuItem}>
          <NavLink to="/about">
            About
          </NavLink>
        </li>

        <li className={classes.headerMenuItem}>
          <NavLink to="/biotoriya">
            #biotoriya_
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default memo(Header);
