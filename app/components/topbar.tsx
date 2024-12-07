'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export function TopBar() {
  const pathname = usePathname();

  // Função para verificar o link ativo
  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo ou Título */}
        <div className="text-lg font-bold">
          <Link href="/">MyApp</Link>
        </div>

        {/* Navegação */}
        <nav className="flex gap-4">
          <Link
            href="/dashboard"
            className={`hover:text-gray-300 ${
              isActive("/dashboard") ? "text-blue-400" : ""
            }`}
          >
            Painel
          </Link>
          <Link
            href="/store"
            className={`hover:text-gray-300 ${
              isActive("/store") ? "text-blue-400" : ""
            }`}
          >
            Loja
          </Link>
        </nav>

        {/* Links Extras */}
        <div className="flex gap-4">
          <Link
            href="/help"
            className="hover:text-gray-300"
          >
            Precisa de ajuda?
          </Link>
          <Link
            href="/partners"
            className="hover:text-gray-300"
          >
            Partners
          </Link>
        </div>
      </div>
    </header>
  );
}