import { genSalt, compareSync, hash } from 'bcryptjs';

export class PasswordService {
  static HashPassword = async (
    password: string,
    nSalt: number = 10
  ): Promise<string> => hash(password, await genSalt(nSalt));

  static ComparePassword = async (
    passwd1: string,
    passwd2: string
  ): Promise<Boolean> => compareSync(passwd1, passwd2);
}
