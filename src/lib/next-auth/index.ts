// import { LoginParams, login } from "@/service/auth";
// import { NextAuthOptions } from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";

// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
  
//   providers: [
//     CredentialsProvider({
//     name: "Credentials",
//     credentials: {
//       username: { label: "Username", type: "text", placeholder: "jsmith" },
//       password: { label: "Password", type: "password" }
//     },
//     async authorize(credentials, req) {
//       const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

//       if (user) {
//         // Any object returned will be saved in `user` property of the JWT
//         return user
//       } else {
//         // If you return null then an error will be displayed advising the user to check their details.
//         return null

//         // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//       }
//     }
//   })
//   ],

// })

// const authOptions: NextAuth = {
//   session: {
//     strategy: "jwt",
//     maxAge: 3 * 24 * 60 * 60,
//     updateAge: 24 * 60 * 60,
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       type: "credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "Masukkan email anda",
//         },
//         password: {
//           label: "Password",
//           placeholder: "Masukkan password anda",
//           type: "password",
//         },
//       },
//       async authorize(credentials) {
//         const { data } = await login(credentials as LoginParams);
//         if (data) {
//           return data.token;
//         }
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, user }) {
//       if (account?.provider === "credentials") {
//         token.accessToken = user;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       if (session.user) {
//         if ("accessToken" in token) {
//           session.user.accessToken = token.accessToken as string;
//         }
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };

// export default authOptions;
