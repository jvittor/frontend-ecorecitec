'use client';

import React from 'react';
import LoginForm from './login-form';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero h-[600px] w-full max-w-[600px] rounded-2xl bg-white py-16"
    >
      <div className="mt-10 grid items-center justify-center gap-8 lg:mt-0">
        <div
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="container mx-auto grid gap-4 bg-white/20 px-4 text-center text-black"
        >
          <div className="flex w-full items-center justify-center">
            <Image
              className="rounded-lg"
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              priority
            />
          </div>
          <h1 className="w-full text-center text-3xl font-bold">
            Faça seu Login
          </h1>
          <div className="w-full">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
