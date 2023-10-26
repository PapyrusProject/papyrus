//next-auth
import { api } from "@/services/api";
import axios from "axios";
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
      async authorize(credentials, req) {
        const res = await api.post("auth/login", {
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
  },
  //secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
