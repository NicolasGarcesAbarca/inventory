import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "../../../env.mjs";
import { isAdmin } from "./admin";

export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  adapter: DrizzleAdapter(db),
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
          return { id: 0, name: "admin", email: credentials?.email };
        }
        return null;
      },
    }),
  ],
  callbacks: {
  },
};
