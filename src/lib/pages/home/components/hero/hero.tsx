'use client';

import React from 'react';
import Button from '@/lib/components/button/button';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero w-full max-w-[900px] py-16">
      <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:mt-0 lg:grid-cols-2">
        <div
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="container mx-auto grid gap-4 px-4 text-center text-[#EEEBD8]"
        >
          <h1 className="w-full text-center text-6xl font-bold lg:text-left">
            Economia Circular
          </h1>
          <p className="w-full text-center text-xl lg:text-left">
            Modelo sustentável que busca minimizar o desperdício e maximizar o
            reaproveitamento de recursos, promovendo um impacto positivo no meio
            ambiente e na sociedade.
          </p>
          <div className="flex w-full items-center justify-center lg:justify-start">
            <Button
              label="Saber Mais"
              onClick={() => console.log('Login clicked')}
              bgColor="bg-[#CFFF5B]"
              hoverColor="hover:bg-[#A3C948]"
            />
          </div>
        </div>
        <div className="flex hidden justify-center lg:block">
          <Image
            className="rounded-lg"
            src="/doodle-hero.png"
            alt="Logo"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
