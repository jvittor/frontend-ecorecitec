/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { getUserData, logout } from '@/lib/services/user-storage';

export const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const storedUser = await getUserData();
        setUser(storedUser);
      } catch (error) {
        console.error('Erro ao carregar os dados do usuário:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeUser();
  }, []);

  return { user, isLoading, logout };
};
