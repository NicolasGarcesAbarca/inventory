import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server/db";
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "../../../env.mjs";
import { isAdmin } from "./admin";
import type { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  adapter: DrizzleAdapter(db) as Adapter,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (
          isAdmin({
            email: credentials?.email,
            password: credentials?.password,
          })
        ) {
          return { id: "0", name: "admin", email: credentials?.email };
        }
        return null;
      },
    }),
  ],
  callbacks: {
  },
};
