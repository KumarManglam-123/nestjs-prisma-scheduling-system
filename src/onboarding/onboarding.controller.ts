import { Body, Controller, Post } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';

@Controller('onboarding')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Post()
  async onboard(@Body() body: { name: string; email: string; role: string }) {
    return this.onboardingService.onboardUser(body);
  }
}