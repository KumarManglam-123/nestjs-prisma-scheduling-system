import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateGoogleUser(profile: any) {
    let user = await this.usersService.findByEmail(profile.email)

    if (!user) {
      user = await this.usersService.createUser({
        email: profile.email,
        name: profile.name,
        role: null,
      })
    }

    return user
  }
}