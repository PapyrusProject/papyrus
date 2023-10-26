import NextAuth from "next-auth/next";
import { ReactNode } from "react";

declare module 'next-auth'{
    interface Session {
        user: {
            message: string ;    
            token: string;
        }
    }
}