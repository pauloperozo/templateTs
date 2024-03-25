const JWT_SECRET = process.env.JWT_SECRET;
import { sign } from 'jsonwebtoken';
export class TokenService {
  static GenerateToken = (
    payload: Object,
    secret: string = JWT_SECRET || '',
    expiresIn: string = '12h'
  ): string => sign(payload, secret, { expiresIn });
}
