'use client'

import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"

export function AuthForm() {
    const form = useForm()

    const handleSubmit = form.handleSubmit(async (data) => {
        console.log(data)

        await signIn('email', {email: data.email})
    })

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                Página de Login
            </main>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email">Email</label>
                    <input id="email" placeholder="email@example.com" required type="email" {... form.register('email')}/>
                </div>
                <button className="w-full" type="submit">Send Magic Link</button>
            </form>
        </div>
    )
}