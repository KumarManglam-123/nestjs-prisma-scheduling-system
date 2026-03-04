import { Controller, Get, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {

  @Get('google')
googleAuth() {
  return { message: "Google auth endpoint" }
}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleCallback(@Req() req) {
    return req.user
  }
}