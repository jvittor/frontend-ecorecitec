'use client';

import Logo from '@/lib/components/logo';
import ItemsNavbar from '@/lib/components/items-navbar/items-navbar';
import ButtonLogin from '@/lib/components/button/button';

const items = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Maior Desafio', href: '#maior-desafio' },
  { label: 'Princípios', href: '#principios' },
];

export const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 w-full rounded-b-3xl bg-[#EEEBD8] backdrop-blur-md">
      <section className="mx-auto flex w-full max-w-[900px] items-center justify-between py-2">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <ItemsNavbar items={items} />
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
