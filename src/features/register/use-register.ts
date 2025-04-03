import { AuthRepository } from '@/core/interfaces/auth.props';
import { User } from '@/core/entities/user';

export class RegisterUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(user: User): Promise<string> {
    // Valida o formato do email
    if (!this.validateEmail(user.email)) {
      throw new Error('Formato de email inválido.');
    }

    if (!this.validatePassword(user.password)) {
      throw new Error(
        'A senha deve ter pelo menos 8 caracteres e conter um número.'
      );
    }

    return this.authRepository.register(user);
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  private validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*\d).{8,}$/; // Pelo menos 8 caracteres e 1 número
    return passwordRegex.test(password);
  }
}
