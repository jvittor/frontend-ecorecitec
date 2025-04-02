import React from 'react';
import ButtonLogin from '@/lib/components/button/button';
import DesktopNavbar from './desktop-navbar';
import Image from 'next/image';

const MobileNavbarComponent: React.FC = () => {
  const items = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Maior Desafio', href: '#maior-desafio' },
    { label: 'Princípios', href: '#principios' },
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
          <ButtonLogin
            label="Entrar"
            onClick={() => console.log('Login clicked')}
            bgColor="bg-[#CFFF5B]"
            hoverColor="hover:bg-[#A3C948]"
          />
        </div>
      </section>
    </header>
  );
};

export default MobileNavbarComponent;
