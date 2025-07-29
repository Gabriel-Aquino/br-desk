import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />

        <SidebarInset className="flex-1">
          {/* Header with trigger */}
          <header className="h-16 flex items-center border-b bg-white px-4 shadow-sm">
            <SidebarTrigger className="mr-4" />

            {/* External links in header */}
            <nav className="ml-auto hidden md:flex items-center gap-4">
              <a
                href="https://portal.sivisweb.com.br/loja/012/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-brand-primary transition-colors"
              >
                Portal
              </a>
              <a
                href="https://mail.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-brand-primary transition-colors"
              >
                Workspace
              </a>
              <a
                href="https://painel.multi360.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-brand-primary transition-colors"
              >
                Multi360
              </a>
              <a
                href="https://sivisweb.com.br/login.php?ex=1&emp=012"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-brand-primary transition-colors"
              >
                SIVIS Br Clube
              </a>
              <a
                href="https://sivisweb.com.br/login.php?ex=1&emp=013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-brand-primary transition-colors"
              >
                SIVIS Left
              </a>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-brand-secondary text-white py-4 px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="text-xs opacity-80">
                © BR CLUBE | 2024 - Todos os direitos reservados
              </div>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}