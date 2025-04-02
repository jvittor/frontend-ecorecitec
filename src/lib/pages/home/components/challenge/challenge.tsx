'use client';

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="hero w-full max-w-[900px] py-16">
      <div className="grid grid-cols-1 items-center gap-8">
        <div
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="container mx-auto flex grid w-full grid-cols-1 items-center justify-between gap-4 text-center text-[#141414] lg:grid-cols-3"
        >
          <div>
            <div className="grid w-full grid-cols-1 gap-2 text-center">
              <div className="flex items-center justify-center">
                <Image
                  className="rounded-lg"
                  src="/doodle-desafio-2.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold">Resíduos</h1>
              <p className="text-lg font-normal">
                O produto deva ser observado desde sua concepção.
              </p>
            </div>
          </div>
          <div>
            <div className="grid w-full grid-cols-1 gap-2 text-center">
              <div className="flex items-center justify-center">
                <Image
                  className="rounded-lg"
                  src="/doodle-desafio-2.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold">Fonte Solar</h1>
              <p className="text-lg font-normal">
                A energia solar dispõe de entrada infinita, constante nos
                sistemas.
              </p>
            </div>
          </div>
          <div>
            <div className="grid w-full grid-cols-1 gap-2 text-center">
              <div className="flex items-center justify-center">
                <Image
                  className="rounded-lg"
                  src="/doodle-desafio-2.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold">Diversidade</h1>
              <p className="text-lg font-normal">
                Diversidade como o fortalecimento de sistemas biológicos e
                industriais.
              </p>
            </div>
          </div>
        </div>
        <Image
          className="rounded-lg"
          src="/doodle-desafio.png"
          alt="Logo"
          width={900}
          height={900}
          priority
        />
      </div>
    </section>
  );
};

export default About;
