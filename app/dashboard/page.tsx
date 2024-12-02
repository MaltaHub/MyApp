import { auth } from "../services/auth";
import { UserInfo } from "./_components/user-info";

export default async function Page() {
    const session = await auth()
    
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                Usuário Logado
                <br/>
                <pre>User Session: {JSON.stringify(session?.user, null, 1)}</pre>
            </main>
            <span>{session?.user?.email}</span>
            <UserInfo user={session?.user}/>
        </div>
    )
}