import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): {
        message: string;
    };
    createUser(data: any): {
        message: string;
        data: any;
    };
}
