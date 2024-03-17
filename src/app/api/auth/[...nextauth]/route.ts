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
          console.log({ data });
          console.log("----end authorize")
          return data;
        } catch (error) {
          console.log(error);
          return error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if(account?.provider === "credentials") {
          token.accessToken = user
          console.log({token})
          return token ;
      }
      // return token
      // console.log({ token: token.user, user });

      console.log("----end jwt")
      // return { token, user };
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
      console.log({ session, token, user });
      console.log("----end session")
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
