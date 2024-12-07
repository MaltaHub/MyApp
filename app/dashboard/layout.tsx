import { PropsWithChildren } from "react";
import { MainSidebar } from "./_components/main-sidebar";

//O layout é tipo a casca do site, e children obtido de PropsWithChildren é o page.tsx
export default function ({ children }: PropsWithChildren) {
    //para usarmos um hook no client-component, precisamos utilizar client-component
    //agora precisamos separar a sidebar em dashboard/_components
    
    //o return só aceita uma tag pai
    return (
        <div className="grid grid-cols-[16rem_1fr] gap-4">
            <MainSidebar/>
            <main>
                {children}
            </main>
        </div>
    )
}