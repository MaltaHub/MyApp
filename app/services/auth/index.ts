import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
//import GitHub from "next-auth/providers/github"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../database"

export const {
    handlers: {GET, POST},
    auth,
} = NextAuth({ // EmailProvider está depreciado, então
    // fique atento para quaisquer problemas que venham a
    // aparecer, pois estamos utilizando o auth-beta@latest
    adapter: PrismaAdapter(prisma),

    pages: {
        signIn: '/auth',
        signOut: '/auth',
        error: '/auth',
        verifyRequest: '/auth',
        newUser: '/dashboard'
    },

    callbacks: {
        async signIn(params) {
            
        },
    },

    providers: [EmailProvider({
        //Aqui pegamos as variáveis de ambiente
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
    })],

    secret: process.env.NEXTAUTH_SECRET, // Chave Secreta em ambiente
})
