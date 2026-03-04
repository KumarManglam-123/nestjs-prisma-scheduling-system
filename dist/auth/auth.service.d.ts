import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateGoogleUser(profile: any): Promise<{
        id: number;
        email: string;
        name: string;
        role: string | null;
        createdAt: Date;
    }>;
}
