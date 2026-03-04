import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        name: string;
        role: string | null;
        createdAt: Date;
    }>;
    createUser(data: any): Promise<{
        id: number;
        email: string;
        name: string;
        role: string | null;
        createdAt: Date;
    }>;
    updateRole(userId: number, role: any): Promise<{
        id: number;
        email: string;
        name: string;
        role: string | null;
        createdAt: Date;
    }>;
}
