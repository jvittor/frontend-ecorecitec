import React from 'react';
import ButtonLogin from '@/lib/components/button/button';
import DesktopNavbar from './desktop-navbar';
import { useUser } from '@/features/use-user';
import { CircularProgress, Avatar } from '@mui/material';
import Image from 'next/image';

const MobileNavbarComponent: React.FC = () => {
  const { user, isLoading } = useUser();
  const items = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Gestão de Resíduos', href: '#waste-management' },
    { label: 'Sistema Circular', href: '#circle-system' },
    { label: 'Maior Desafio', href: '#challenge' },
  ];
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 hidden w-full rounded-b-3xl bg-[#EEEBD8] backdrop-blur-md lg:block">
      <section className="mx-auto flex w-full max-w-[900px] items-center justify-between py-2">
        <div className="flex w-full items-center justify-between">
          <Image
            className="rounded-lg"
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
          <DesktopNavbar items={items} />
          {isLoading ? (
            <div className="flex items-center justify-center">
              <CircularProgress color="success" />
            </div>
          ) : !user ? (
            <ButtonLogin
              label="Entrar"
              onClick={() => console.log('Login clicked')}
              bgColor="bg-[#CFFF5B]"
              hoverColor="hover:bg-[#A3C948]"
            />
          ) : (
            <>
              <Avatar
                alt={user.username}
                sx={{ width: 50, height: 50 }}
                src={user?.imageBase64 || './assets/johnbonham.webp'}
              />
              <div className="px-2">
                <a href="/user">
                  <ButtonLogin
                    label="Dados"
                    onClick={() => console.log('Login clicked')}
                    bgColor="bg-[#CFFF5B]"
                    hoverColor="hover:bg-[#A3C948]"
                  />
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </header>
  );
};

export default MobileNavbarComponent;
