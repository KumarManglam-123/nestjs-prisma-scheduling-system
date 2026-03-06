export declare class AuthController {
    googleAuth(): {
        message: string;
        url: string;
    };
    googleCallback(): {
        message: string;
        user: {
            name: string;
            email: string;
        };
    };
}
