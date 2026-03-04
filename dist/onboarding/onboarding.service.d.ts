import { UsersService } from '../users/users.service';
export declare class OnboardingService {
    private usersService;
    constructor(usersService: UsersService);
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
