'use client';

import DesktopNavbar from '@/lib/components/navbar/desktop-navbar/index';
import MobileNavbar from '@/lib/components/navbar/mobile-navbar/index';

export const Header = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};
