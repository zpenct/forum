import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginParams } from "../../../../../@types";
import api from "@/lib/api";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const data = await api.login(credentials as LoginParams);
          return data;
        } catch (error) {
          console.log(error);
          return error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({token,user,account }) {
      if(account?.provider === "credentials") {
          token.accessToken = user
          return token ;
      }
      return token
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      session.user = token.accessToken as any;
      return session;
    },
  },
  secret: "secret",
  pages: {
    signIn: "/login",
  },
});
export { handler as GET, handler as POST };
