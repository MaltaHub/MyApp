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
            console.log(data)
            await signIn('email', { email: data.email, redirect: false })

            //cria a notificação de sucesso sem duração
            toast.success('Check your email for the magic link to login', { id: 'sucess', duration: 8000, position: 'bottom-center' });

            //define a função de espera síncrona com async/await utilizando Promise
            const functionWait = (duration: number) => new Promise((resolve) => setTimeout(() => {
                return console.log("Esperando",duration,"segundos!")
            }, duration | 1000))

            //função de espera e exclusão de notificação
            async function setWait(duration: number) {
                console.log("Começando espera!")
                await functionWait(duration)

                //apaga a notificação
                toast.dismiss('sucess')
                console.log("Notificação desligada!")
            }

            setWait(8000)
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