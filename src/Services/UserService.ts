import { User } from '../Entities/User';

export class UserService {
  static Create = async (user: User): Promise<User> => {
    return User.save(user);
  };

  static findOneByEmail = async (email: string): Promise<User | null> => {
    return await User.findOneBy({ email });
  };
}
