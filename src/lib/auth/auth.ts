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
        email: {label: 'Email', type: 'email'},
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        const payload = {
          username: credentials?.username,
          password: credentials?.password
        }

        const res = await fetch('https://papyrus-backend.onrender.com/v1/auth/login',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })

       const user = await res.json()
        // If error
       if(!res.ok){
        throw new Error('Erro na autenticação!')
      }

      // If no error, get Data and return it
      if(res.ok){
        return user
      }
      // Return null if user data could not be retrieved
      return null
    },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  //secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
