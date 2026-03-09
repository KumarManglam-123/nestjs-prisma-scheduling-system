import { IsEmail, IsIn, IsString } from 'class-validator';

export class SignupDto {

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsIn(['PATIENT', 'DOCTOR'])
  role: string;

}