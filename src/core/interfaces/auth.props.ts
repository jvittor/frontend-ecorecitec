/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@/core/entities/user';

export interface AuthRepository {
  login(user: User): Promise<{ token: string; profile: any }>;
  register(user: User): Promise<string>;
}
