import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'

@Injectable()
export class OnboardingService {
  constructor(private usersService: UsersService) {}

  assignPatient(userId: number) {
    return this.usersService.updateRole(userId, 'PATIENT')
  }

  assignDoctor(userId: number) {
    return this.usersService.updateRole(userId, 'DOCTOR')
  }
}