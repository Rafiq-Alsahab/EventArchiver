import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { verifyPassword , hashPassword } from "@/lib/auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
     
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          throw new Error("No user found with this email");
        }
        const isValid = await verifyPassword(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }
        return user;
      },
    })
  ],
  pages: {
    signIn: "/en/auth/login", 
    error: "/err"  
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
  
    async jwt({ token, user }) {
      console.log('jwt')
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      console.log('seesion')
      session.user.id = token.id;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
