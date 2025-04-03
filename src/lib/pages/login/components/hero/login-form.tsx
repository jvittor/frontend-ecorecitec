/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from '@emotion/styled';
import { LoginUseCase } from '@/features/login/use.login';
import { AuthRepositoryImpl } from '@/core/repositories/auth.repository';
import Button from '@/lib/components/button/button';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const CustomTextField = styled(TextField)({
  '& input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    WebkitTextFillColor: 'black',
  },
});

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const authRepository = new AuthRepositoryImpl();
  const loginUseCase = new LoginUseCase(authRepository);

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const token = await loginUseCase.execute(loginData);
      toast.success('Login realizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      });
      router.push('/');
    } catch (error: any) {
      setErrorMessage(error.message || 'Erro ao realizar login.');
      toast.error(error.message || 'Erro ao realizar login.', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="login-form grid w-full grid-cols-1 gap-5 md:w-[60vh]"
      >
        <CustomTextField
          required
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          className="mb-4"
          onChange={handleLogin}
          value={loginData.email}
          error={
            loginData.email !== '' &&
            !loginUseCase['validateEmail'](loginData.email)
          }
        />
        <CustomTextField
          required
          id="password"
          name="password"
          label="Senha"
          variant="outlined"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          onChange={handleLogin}
          value={loginData.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <div className="flex w-full items-center justify-center">
          <button type="submit">
            <Button
              label="Entrar"
              onClick={() => console.log('Login clicked')}
              bgColor="bg-[#CFFF5B]"
              hoverColor="hover:bg-[#A3C948]"
            />
          </button>
        </div>
        <div className="flex w-full items-center justify-center underline">
          <a href="/register">caso ainda não tenha registro, clique aqui.</a>
        </div>
      </form>
      <div>
        {loginData.password !== '' &&
          !loginUseCase['validatePassword'](loginData.password) && (
            <p style={{ color: 'red', marginTop: '4px' }}>
              A senha deve ter pelo menos 8 caracteres e um número.
            </p>
          )}
        {loginData.email !== '' &&
          !loginUseCase['validateEmail'](loginData.email) && (
            <p style={{ color: 'red', marginTop: '4px' }}>
              Formato inválido de email
            </p>
          )}
      </div>
    </>
  );
};

export default LoginForm;
