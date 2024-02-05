import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { toComparePasswords } from "@/app/[locale]/(auth)/signUp/components/registrationForm/service/util/validateUser";
import { Pages } from "@/utils/pages";
import prisma from "$prismaClient/prisma";
import { findUser } from "@/server/actions/findUser";

export const authOptions: NextAuthOptions = {
  // eslint-disable-next-line
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Full name" },
        email: { label: "Username", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "password" },
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        //eslint-disable-next-line
        if (credentials?.email) {
          try {
            const user = await findUser(credentials?.email);

            if (
              user &&
              typeof user !== "string" &&
              credentials?.email === user.email &&
              toComparePasswords(credentials?.password, user.hashPassword)
            ) {
              return user;
            }
          } catch (e) {
            throw "there is an error during logging";
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (user) {
        token.role = user?.role;
        token.sub = user?.id;
      }
      return token;
    },

    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (token && session.user) {
        session.user.role = token.role;
        session.user.id = token.sub!;
      }
      return session;
    },
  },
  pages: {
    signIn: Pages.LOGIN,
  },
  // secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: 'jwt',
  // },
  // debug: process.env.NODE_ENV === 'development',
  //
  // jwt: {
  //   async encode({ secret, token }) {
  //     return jwt.sign(token, secret)
  //   },
  //   async decode({ secret, token }) {
  //     return jwt.verify(token, secret)
  //   },
  // },
  // your configs
};

export default NextAuth(authOptions);
