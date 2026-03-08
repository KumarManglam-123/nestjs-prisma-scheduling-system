import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OnboardingService {
  constructor(private prisma: PrismaService) {}

  async onboardUser(data: { name: string; email: string; role: string }) {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: data.role,
      },
    });
  }
}