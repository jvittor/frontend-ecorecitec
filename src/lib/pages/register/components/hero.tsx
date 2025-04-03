'use client';

import React, { useState, useEffect } from 'react';
import RegisterForm from './register-form';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <section
      id="hero"
      className="hero flex h-[700px] w-full max-w-[600px] items-center justify-center rounded-2xl bg-white py-16"
    >
      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
          <p className="mt-2 text-black">Carregando...</p>
        </div>
      ) : (
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
              Faça seu registro
            </h1>
            <div className="w-full">
              <RegisterForm />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
