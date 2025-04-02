'use client';

import React from 'react';
import Image from 'next/image';

const CircleSystem: React.FC = () => {
  return (
    <section
      id="circle-system"
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      className="hero w-full max-w-[900px] flex-1 py-16"
    >
      <div className="grid gap-15">
        <div className="grid w-full grid-cols-1 items-center gap-8">
          <Image
            className="rounded-lg p-5 lg:p-0"
            src="/circle-system.png"
            alt="Logo"
            width={900}
            height={900}
            priority
          />
          <div
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="container mx-auto grid gap-4 px-4 text-center text-white"
          >
            <p className="text-md w-full text-center font-semibold lg:text-xl">
              Resíduos segregados corretamente tornam-se matérias-primas
              reutilizáveis, seguindo os princípios dos 3R’s da Economia Linear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircleSystem;
