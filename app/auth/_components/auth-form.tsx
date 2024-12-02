'use client'

import { signIn } from "next-auth/react"
import { resolve } from "path"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export function AuthForm() {
    const form = useForm()

    const handleSubmit = form.handleSubmit(async (data) => {
        //let notifier //seria o objeto resultado de toast.success mas aparentemente não funciona

        try {
            const duration = 8000 // milisegundos
            console.log(data)

            //chama função de login do NextAuth
            await signIn('email', { email: data.email, redirect: false })

            //cria a notificação de sucesso, que não esatava mostrando pois o signIn redirecionava (Corrigido com 'redirect:false')
            toast.success('Check your email for the magic link to login', {duration: duration, position: 'bottom-center' });

            //função de espera assíncrona (se chamada, não para o fluxo do código)
            async function setWait(duration?: number) {
                if (!duration) duration = 1000
                console.log("Esperando "+duration+" milisegundos!")

                //espera utilizando Promise
                new Promise(() => setTimeout(() => {
                    console.log("Notificação encerrada!")
                }, duration))
            }
            setWait(duration)

        } catch (error) {
            toast.error('An error ocurred. Please try again.')
        }
    })

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                Página de Login
            </main>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input id="email" placeholder="email@example.com" required type="email" {...form.register('email')} />
                </div>
                <button className="w-full" type="submit">Send Magic Link</button>
            </form>
        </div>
    )
}