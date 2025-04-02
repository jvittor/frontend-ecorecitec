/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthRepository } from '@/core/interfaces/auth.props';
import { User } from '@/core/entities/user';

export class AuthRepositoryImpl implements AuthRepository {
  async login(user: User): Promise<{ token: string; profile: any }> {
    // Realiza o login e obtém o token
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
        credentials: 'include',
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ocorreu um erro inesperado.');
    }

    const { token } = await response.json();

    const profileResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      }
    );

    if (!profileResponse.ok) {
      throw new Error('Erro ao buscar os dados do perfil.');
    }

    const profile = await profileResponse.json();

    // Retorna os dados necessários para o caso de uso
    return { token, profile };
  }
}
