'use client';

import React from 'react';
import { Divider, CircularProgress, Avatar } from '@mui/material';
import Link from 'next/link';
import Button from '@/lib/components/button/button';
import { useUser } from '@/features/use-user';
import { logout } from '@/lib/services/user-storage';
import { useRouter } from 'next/navigation';

const Hero: React.FC = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      console.error('Erro ao realizar logout:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[600px] w-full items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <section
      id="hero"
      className="hero h-auto w-full rounded-2xl bg-white px-4 py-8 sm:max-w-[900px] sm:px-8 sm:py-16"
    >
      <div className="mt-5 grid items-center justify-center gap-6 sm:mt-10 sm:gap-8">
        <div
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          className="container mx-auto grid gap-4 bg-white/20 px-4 text-center text-black"
        >
          <div className="flex w-full items-center justify-center">
            <Avatar
              alt={user.username}
              sx={{ width: 80, height: 80 }}
              src={user?.imageBase64 || './assets/johnbonham.webp'}
              className="sm:h-[100px] sm:w-[100px]"
            />
          </div>
          <h1 className="flex w-full flex-col items-center justify-between text-center text-xl font-bold sm:flex-row sm:text-3xl">
            <div>Nome:</div>
            <div>{user?.name || 'Nome do Usuário'}</div>
          </h1>
          <div className="w-full">
            <Divider />
          </div>
          <h1 className="flex w-full flex-col items-center justify-between text-center text-xl font-bold sm:flex-row sm:text-3xl">
            <div>@:</div>
            <div>{user?.username || 'Username do Usuário'}</div>
          </h1>
          <div className="w-full">
            <Divider />
          </div>
          <h1 className="flex w-full flex-col items-center justify-between gap-2 text-center text-xl font-bold sm:flex-row sm:gap-5 sm:text-3xl">
            <div>Email:</div>
            <div>{user?.email || 'Email do Usuário'}</div>
          </h1>
          <div className="w-full">
            <Divider />
          </div>
          <button onClick={handleLogout} className="w-full sm:w-auto">
            <Button
              label="Sair da Conta"
              bgColor="bg-[#CFFF5B]"
              hoverColor="hover:bg-[#A3C948]"
              onClick={() => console.log('Login clicked')}
            />
          </button>
          <Link href="/" className="w-full sm:w-auto">
            <Button
              label="Início"
              onClick={() => console.log('Login clicked')}
              bgColor="bg-white"
              hoverColor="hover:bg-[#A3C948]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
