'use client';

import type { ReactNode } from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { usePathname } from 'next/navigation';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const GoogleID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

  const hideHeader = pathname === '/login' || pathname === '/register';

  return (
    <GoogleOAuthProvider clientId={GoogleID}>
      <div className="flex min-h-screen flex-col">
        {!hideHeader && <Header />}
        <ToastContainer />
        <main className="">{children}</main>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Layout;
