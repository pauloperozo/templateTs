import { IUser, User } from '../Entities/User';

export class UserService {
    static Create = async (data: IUser): Promise<User> => {
        const { email, password } = data;
        const user = new User();
        user.email = email;
        user.password = password;
        return User.save(user);
    };

    static findOneByEmail = async (email: string): Promise<User | null> => {
        return await User.findOneBy({ email });
    };
}
