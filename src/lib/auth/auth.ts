//next-auth
import { NextAuthOptions } from "next-auth";

//Providers
import CredentialsProvider from "next-auth/providers/credentials"

export const configAuth: NextAuthOptions = {
    providers: [
        CredentialsProvider({

            name: 'credentials',

            credentials: {
                username: { label: "Username", type: "text", },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {

                const user = { email: 'test@gmail.com', password: 'test' }

                if (user) {
                    return user
                }
                return null
            }
        })
    ]
}