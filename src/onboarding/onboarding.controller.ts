import { Controller, Post, Body } from '@nestjs/common'
import { OnboardingService } from './onboarding.service'

@Controller('onboarding')
export class OnboardingController {
  constructor(private onboardingService: OnboardingService) {}

  @Post('patient')
  assignPatient(@Body('userId') userId: number) {
    return this.onboardingService.assignPatient(userId)
  }

  @Post('doctor')
  assignDoctor(@Body('userId') userId: number) {
    return this.onboardingService.assignDoctor(userId)
  }
}