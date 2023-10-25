//next-auth
import { api } from "@/services/api";
import { NextAuthOptions } from "next-auth";

//Providers
import CredentialsProvider from "next-auth/providers/credentials";

export const configAuth: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }
        const user = credentials
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  //secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
