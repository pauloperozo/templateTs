import { IsNotEmpty,IsEmail} from 'class-validator';

export class signupDto {
    @IsNotEmpty()
    @IsEmail()
    email!: string;
    @IsNotEmpty()
    password!:string;
}

export class signinDto {
    @IsNotEmpty()
    @IsEmail()
    email!: string;
    @IsNotEmpty()
    password!:string;
}
