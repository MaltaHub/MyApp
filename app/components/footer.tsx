export function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          {/* Links principais */}
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-bold">MyApp</h2>
              <p className="text-gray-400 text-sm">Construindo o futuro, hoje.</p>
            </div>
  
            <div className="flex gap-6">
              <a
                href="/about"
                className="hover:text-gray-300 text-sm"
              >
                Sobre Nós
              </a>
              <a
                href="/privacy"
                className="hover:text-gray-300 text-sm"
              >
                Política de Privacidade
              </a>
              <a
                href="/terms"
                className="hover:text-gray-300 text-sm"
              >
                Termos de Serviço
              </a>
            </div>
          </div>
  
          {/* Direitos autorais */}
          <div className="text-center mt-6 border-t border-gray-700 pt-4 text-gray-400 text-xs">
            © {new Date().getFullYear()} MyApp. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    );
  }
  