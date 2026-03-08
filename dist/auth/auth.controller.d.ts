export declare class AuthController {
    googleAuth(): Promise<void>;
    googleAuthCallback(req: any): {
        message: string;
        user: any;
    };
}
