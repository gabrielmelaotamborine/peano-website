import PeanoLogo from "../imports/PeanoLogo";

export function Footer() {
  return (
    <footer className="bg-[#44216a] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="w-40 mb-4">
              <PeanoLogo fill="white" />
            </div>
            <p className="text-gray-300 mb-4">
              O cartão corporativo que simplifica a gestão de despesas para PMEs brasileiras.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
              <li><a href="#mastercard-surpreenda" className="hover:text-white transition-colors">Mastercard Surpreenda</a></li>
            </ul>
          </div>

          {/* Company column removed as requested */}
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
          <p>© 2026 Peano. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
