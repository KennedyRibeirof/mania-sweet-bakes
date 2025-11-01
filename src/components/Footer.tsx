import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t bg-card/50 backdrop-blur mt-16">
      <div className="container py-8 px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Atendimento ao Cliente
            </h3>
            <Link 
              to="/suporte" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Suporte Técnico da Empresa - Central de Ajuda
            </Link>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ManiaCookies. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
