import { OnboardingService } from './onboarding.service';
export declare class OnboardingController {
    private onboardingService;
    constructor(onboardingService: OnboardingService);
    assignPatient(userId: number): Promise<{
        id: number;
        email: string;
        name: string;
        role: string | null;
        createdAt: Date;
    }>;
    assignDoctor(userId: number): Promise<{
        id: number;
        email: string;
        name: string;
        role: string | null;
        createdAt: Date;
    }>;
}
