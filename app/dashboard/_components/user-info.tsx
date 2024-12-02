'use client'

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
    user: Session['user']
}

export function UserInfo({user} : Props) {
    if (!user) return
    return (
        <button onClick={() => signOut()}>Sign Out</button>
    )
}