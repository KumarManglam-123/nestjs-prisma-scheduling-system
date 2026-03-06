import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {

  @Get('google')
  googleAuth() {
    return {
      message: "Redirecting to Google OAuth",
      url: "https://accounts.google.com/o/oauth2/v2/auth"
    };
  }

  @Get('google/callback')
  googleCallback() {
    return {
      message: "Google OAuth successful",
      user: {
        name: "Demo User",
        email: "demo@gmail.com"
      }
    };
  }
}