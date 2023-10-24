import { configAuth } from "@/lib/auth/auth";
import NextAuth from "next-auth";

const handler = NextAuth(configAuth);

export { handler as GET, handler as POST }