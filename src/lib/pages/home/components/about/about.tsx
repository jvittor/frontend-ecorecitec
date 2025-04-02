'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="hero w-full max-w-[900px] py-16">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex hidden justify-center lg:block">
          <Image
            className="rounded-lg"
            src="/doodle-about.png"
            alt="Logo"
            width={500}
            height={500}
            priority
          />
        </div>
        <div
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="container mx-auto grid gap-4 px-4 text-center text-[#141414]"
        >
          <h1 className="w-full text-center text-3xl font-bold lg:text-right">
            A Economia Circular possibilita um ideal aproveitamento e
            reaproveitamento sistemático de produtos industrializados, bens
            duráveis e não-duráveis, desde a etapa de concepção de projeto, até
            mesmo após a sua reutilização.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
