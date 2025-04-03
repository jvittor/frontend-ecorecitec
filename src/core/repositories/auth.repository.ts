/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthRepository } from '@/core/interfaces/auth.props';
import { User } from '@/core/entities/user';

export class AuthRepositoryImpl implements AuthRepository {
  async register(user: User): Promise<string> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
        credentials: 'include',
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao registrar o usuário.');
    }

    const { message } = await response.json();
    return message;
  }
  async login(user: User): Promise<{ token: string; profile: any }> {
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

    return { token, profile };
  }
}
