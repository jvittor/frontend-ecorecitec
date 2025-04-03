/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@/lib/components/button/button';
import { RegisterUseCase } from '@/features/register/use-register';
import { AuthRepositoryImpl } from '@/core/repositories/auth.repository';
import { toast } from 'react-toastify';

const RegisterForm: React.FC = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const authRepository = new AuthRepositoryImpl();
  const registerUseCase = new RegisterUseCase(authRepository);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const message = await registerUseCase.execute(registerData);
      toast.success(message || 'Usuário registrado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error: any) {
      toast.error(error.message || 'Erro ao registrar o usuário.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="register-form grid w-full grid-cols-1 gap-5 md:w-[60vh]"
    >
      <TextField
        required
        id="name"
        name="name"
        label="Nome"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={registerData.name}
      />
      <TextField
        required
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={registerData.email}
      />
      <TextField
        required
        id="password"
        name="password"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        onChange={handleChange}
        value={registerData.password}
      />

      <button className="" type="submit">
        <Button
          label="Registrar"
          onClick={() => console.log('Login clicked')}
          bgColor="bg-[#CFFF5B]"
          hoverColor="hover:bg-[#A3C948]"
        />
      </button>
      <div className="flex w-full items-center justify-center underline">
        <a href="/login">caso já tenha se registrado, faça seu login aqui.</a>
      </div>
    </form>
  );
};

export default RegisterForm;
