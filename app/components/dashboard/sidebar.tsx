// Base da componentização do nosso Sidebar, utilizando 
// composition partner!

import { cn } from "@/lib/utils"
import React from "react"
import Link from "next/link" //Essencial para o SidebarNavLink

//'<T = any> [...] & T' estende a tipagem
export type SidebarGenericProps<T = any> = {
    children: React.ReactNode
    className?: string
} & T

export function Sidebar({ className, children }: SidebarGenericProps) {
    //quando instalamos o shadcn UI, ele nos dá um util nomeado
    //'cn', que nos permite mesclar dois className, então aqui
    //temos o className padrão do componente, e o className da Prop,
    //então quando você cobre as classes com o 'cn', ele junta os dois, 
    //e fala pro tailwind que a classe é dinâmica, mas ele precisa prestar 
    //mais atenção nela ao processá-la, pois ele processa as classes no 
    //momento da build!
    
    return (
        <aside className={cn(["border-r border-border flex flex-col space-y-6", className])}>
            {children}
        </aside>
    )
}

export function SidebarHeader({ className, children }: SidebarGenericProps) {
    return (
        <header className={cn(["px-6", className])}>
            {children}
        </header>
    )
}

export function SidebarHeaderTitle({ className, children }: SidebarGenericProps) {
    return (
        <h2 className={cn(["", className])}>
            {children}
        </h2>
    )
}

export function SidebarMain({ className, children }: SidebarGenericProps) {
    return (
        <main className={cn(["px-3", className])}>
            {children}
        </main>
    )
}

export function SidebarNav({ className, children }: SidebarGenericProps) {
    return (
        <nav className={cn(["", className])}>
            {children}
        </nav>
    )
}

export function SidebarNavHeader({ className, children }: SidebarGenericProps) {
    return (
        <header className={cn(["", className])}>
            {children}
        </header>
    )
}

export function SidebarNavHeaderTitle({ className, children }: SidebarGenericProps) {
    return (
        <h4 className={cn(["text-sx uppercase text-muted-foreground ml-3", className])}>
            {children}
        </h4>
    )
}

export function SidebarNavMain({ className, children }: SidebarGenericProps) {
    return (
        <main className={cn(["flex flex-col", className])}>
            {children}
        </main>
    )
}

type SidebarNavLinkProps = {
    href: string
    active?: boolean
}

export function SidebarNavLink({ className, children, href, active }: SidebarGenericProps<SidebarNavLinkProps>): React.JSX.Element {
    return (
        <Link href={href} className={cn([
            "text-sm px-3 py-2", 
            active && 'bg-secondary',
            className
            ])}>
            {children}
        </Link>
    )
}

export function SidebarFooter({ className, children }: SidebarGenericProps) {
    return (
        <footer className={cn(["px-6 mt-auto border-t border-border", className])}>
            {children}
        </footer>
    )
}