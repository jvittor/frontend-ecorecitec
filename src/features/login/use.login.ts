import { AuthRepositoryImpl as AuthRepository } from '@/core/repositories/auth.repository';
import { User } from '@/core/entities/user';
import Cookie from 'js-cookie';
import { openDB } from '@/lib/services/user-storage';

export class LoginUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(user: User): Promise<string> {
    if (!this.validateEmail(user.email)) {
      throw new Error('Invalid email format');
    }

    const { token, profile } = await this.authRepository.login(user);

    const userDataWithLoginDate = {
      ...profile,
      loginDate: new Date().toISOString(),
    };

    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');

    const addRequest = objectStore.add(userDataWithLoginDate);

    await new Promise((resolve, reject) => {
      addRequest.onsuccess = () => resolve(true);
      addRequest.onerror = (e) => {
        console.error('Erro ao salvar no IndexedDB:', e);
        reject(new Error('Erro ao salvar dados do usuário no IndexedDB.'));
      };
    });

    Cookie.set('TOKEN_KEY', token, { expires: 7 });

    return token;
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  private validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }
}
