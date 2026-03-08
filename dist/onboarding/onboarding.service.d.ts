import { PrismaService } from '../prisma/prisma.service';
export declare class OnboardingService {
    private prisma;
    constructor(prisma: PrismaService);
    onboardUser(data: {
        name: string;
        email: string;
        role: string;
    }): Promise<{
        email: string;
        name: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
}
