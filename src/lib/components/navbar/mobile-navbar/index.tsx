import React from 'react';
import MobileNavbar from './mobile-navbar';

const MobileNavbarComponent: React.FC = () => {
  const items = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Maior Desafio', href: '#maior-desafio' },
    { label: 'Princípios', href: '#principios' },
  ];
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 block w-full rounded-b-3xl backdrop-blur-md lg:hidden">
      <section className="mx-auto flex w-full max-w-[900px] items-center justify-between py-2">
        <MobileNavbar items={items} />
      </section>
    </header>
  );
};

export default MobileNavbarComponent;
