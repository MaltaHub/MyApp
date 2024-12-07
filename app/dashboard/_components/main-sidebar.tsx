'use client'

import { Sidebar, SidebarHeader, SidebarHeaderTitle, SidebarMain, SidebarNav, SidebarNavMain, SidebarNavLink, SidebarNavHeader, SidebarNavHeaderTitle, SidebarFooter } from "@/app/components/dashboard/sidebar";
import { usePathname } from "next/navigation";

export function MainSidebar() {
    //garanta que o router seja do next/navigator o mais 
    //recente, enquanto o outro vem do antigo padrão pages
    const pathname = usePathname()

    //uma abordagem de hook por hora tosca (pois envia 'active',
    //configurado anteriormente no type SidebarNavLinkProps de sidebar.tsx,
    //chamando a função isActive, e passando path, que no caso compara o url
    //atual com path, que sempre será verdadeiro se passarmos o path alvo
    //como parâmetro, e assim a função retorna um boolean, que é tratado no
    //componente SidebarNavLink de sidebar.tsx, e cria uma simulação de hook!
    const isActive = (path: string) => {
        return pathname === path
    }


    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarHeaderTitle>Sidebar</SidebarHeaderTitle>
            </SidebarHeader>
            <SidebarMain className="flex flex-col flex-grow">
                <SidebarNav>
                    <SidebarNavMain>
                        <SidebarNavLink href="/dashboard" active={isActive('/dashboard')}>Hub</SidebarNavLink>
                        <SidebarNavLink href="/dashboard/settings" active={isActive('/dashboard/settings')}>Configurações</SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>

                <SidebarNav className="mt-auto">
                    <SidebarNavHeader>
                        <SidebarNavHeaderTitle>
                            Links extras
                        </SidebarNavHeaderTitle>
                    </SidebarNavHeader>
                    <SidebarNavMain>
                        <SidebarNavLink href="/" active={isActive('/')}>Precisa de ajuda?</SidebarNavLink>
                        <SidebarNavLink href="/" active={isActive('/')}>Sites</SidebarNavLink>
                    </SidebarNavMain>
                </SidebarNav>
            </SidebarMain>
            <SidebarFooter>
                <h1>User</h1>
            </SidebarFooter>
        </Sidebar>
    )
}