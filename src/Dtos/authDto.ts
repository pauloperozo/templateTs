import { IsNotEmpty, IsEmail, Max, Min, Length } from 'class-validator';

export class signupDto {
    @IsNotEmpty()
    @IsEmail()
    email!: string;
    @IsNotEmpty()
    password!: string;
}

export class signinDto {
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @Length(5, 5)
    verificationCode!: string;
}
