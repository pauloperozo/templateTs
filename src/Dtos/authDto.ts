import { IsNotEmpty, IsEmail, Max, Min, Length } from 'class-validator';

export class signUpDto {
    @IsNotEmpty()
    @IsEmail()
    email!: string;
}

export class signInDto {
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @Length(5, 5)
    verificationCode!: string;
}
