'use client';

import React from 'react';
import Button from '@/lib/components/button/button';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero h-[600px] w-full max-w-[600px] bg-white py-16"
    >
      <div className="mt-10 grid items-center justify-center gap-8 lg:mt-0">
        <div
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="container mx-auto grid gap-4 bg-white px-4 text-center text-black"
        >
          <div className="flex w-full items-center justify-center">
            <Image
              className="rounded-lg"
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <h1 className="w-full text-center text-6xl font-bold">
            Economia Circular
          </h1>
          <div className="flex w-full items-center justify-center">
            <Button
              label="Saber Mais"
              onClick={() => console.log('Login clicked')}
              bgColor="bg-[#CFFF5B]"
              hoverColor="hover:bg-[#A3C948]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
