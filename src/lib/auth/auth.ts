//next-auth
import { instance } from "@/services/api";
import { NextAuthOptions } from "next-auth";

//Providers
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const configAuth: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await instance.post("auth/login", {
          username: credentials?.username,
          password: credentials?.password,
        });

        const user = await res.data;

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    error: "/",
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
};
