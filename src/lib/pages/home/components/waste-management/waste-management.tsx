'use client';

import React from 'react';
import Timeline from './timeline';

const WasteManagement: React.FC = () => {
  return (
    <section
      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      className="hero w-full max-w-[900px] flex-1 py-16"
    >
      <div className="grid gap-15">
        <h1 className="w-full text-center text-3xl font-bold lg:text-left">
          À medida que as cidades cresciam, surgia a necessidade de serviços
          públicos essenciais, como saneamento, moradia, educação, saúde,
          emprego e renda.
        </h1>
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            className="container mx-auto grid gap-4 px-4 text-center text-[#EEEBD8]"
          >
            <h2 className="w-full text-center text-2xl font-semibold text-black lg:text-left">
              Resíduos segregados corretamente tornam-se matérias-primas
              reutilizáveis, seguindo os princípios dos 3R’s da Economia Linear.
            </h2>
          </div>
          <div className="flex w-full items-center justify-end">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteManagement;
