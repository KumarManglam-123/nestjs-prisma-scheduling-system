import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateGoogleUser(profile: any): Promise<{
        email: string;
        name: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
}
