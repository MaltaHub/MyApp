import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('authjs.session-token')?.value; // Obtém o token do cookie
  const pathname = request.nextUrl.pathname;

  const baseUrl =
    process.env.NEXTAUTH_URL || `${request.nextUrl.protocol}//${request.nextUrl.host}`;

  if (token) {
    try {
      const session = await fetch(`${baseUrl}/api/auth/session`, {
        headers: {
          Cookie: `authjs.session-token=${token}`,
        },
      }).then((res) => (res.ok ? res.json() : null));

      if (session) {
        // Sessão válida, redirecionar de /auth para /dashboard
        if (pathname === '/auth') {
          return NextResponse.redirect(new URL('/dashboard', request.url));
        }
        return NextResponse.next();
      } else {
        // Sessão inválida, remover cookie
        const response = NextResponse.redirect(new URL('/auth', request.url));
        response.cookies.delete('authjs.session-token'); // Remove o cookie do token inválido
        return response;
      }
    } catch (error) {
      console.error("Erro ao validar sessão:", error);
    }
  }

  // Sem token, redirecionar para /auth se tentar acessar /dashboard
  if (pathname.includes('/dashboard')) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth'],
};
