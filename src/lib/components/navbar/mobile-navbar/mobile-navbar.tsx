'use client';

import React, { useState } from 'react';
import { ItemsNavbarProps } from '@/core/interfaces/navbar-items.props';
import { useUser } from '@/features/use-user';
import {
  AppBar,
  Box,
  CircularProgress,
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Button from '@/lib/components/button/button';

const drawerWidth = 240;

const MobileNav: React.FC<ItemsNavbarProps> = ({ items }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isLoading } = useUser();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box component="div" className="drawer" sx={{ textAlign: 'center' }}>
      <div className="flex w-full items-center justify-between p-4">
        <Image alt="Logo" width="50" height="50" src="/logo.png" />
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          role="img"
          aria-label="fechar"
        >
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <nav>
        {items.map((item) => (
          <a key={item.label} href={item.href}>
            <a className="block p-4 text-left font-bold text-black no-underline hover:underline">
              {item.label}
            </a>
          </a>
        ))}
      </nav>
      <Divider />
      {isLoading ? (
        <CircularProgress color="success" />
      ) : !user ? (
        <div className="text-black-300 mt-5 grid w-full gap-5 p-4 font-bold">
          <a href="/login">
            <Button
              label="Entrar"
              onClick={() => console.log('Login clicked')}
              bgColor="bg-[#CFFF5B]"
              hoverColor="hover:bg-[#A3C948]"
            />
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-4">
          <Avatar
            alt={user.username}
            sx={{ width: 100, height: 100 }}
            src={user?.imageBase64 || './assets/johnbonham.webp'}
          />
          <p className="mt-2 font-bold">{user.username}</p>
          <div className="text-black-300 mt-5 grid w-full gap-5 p-4 font-bold">
            <a href="/user">
              <Button
                label="Dados"
                onClick={() => console.log('Login clicked')}
                bgColor="bg-[#CFFF5B]"
                hoverColor="hover:bg-[#A3C948]"
              />
            </a>
          </div>
        </div>
      )}
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        sx={{ backgroundColor: '#EEEBD8' }}
        className="rounded-b-3xl"
        component="nav"
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Image alt="Logo" width="40" height="40" src="/logo.png" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default MobileNav;
