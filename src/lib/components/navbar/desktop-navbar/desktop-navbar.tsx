'use client';

import React from 'react';
import { ItemsNavbarProps } from '@/core/interfaces/navbar-items.props';
import { navbarStyles } from './desktop-navbar.styles';

const ItemsNavbar: React.FC<ItemsNavbarProps> = ({ items }) => {
  return (
    <nav>
      <ul
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        className={navbarStyles.ul}
      >
        {items.map((item, index) => (
          <li key={index} className={navbarStyles.li}>
            <a href={item.href} className={navbarStyles.a}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ItemsNavbar;
