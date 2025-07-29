import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BoasVindas from "./pages/BoasVindas";
import BoasVindasAdesao from "./pages/BoasVindasAdesao";
import BoasVindasBrPower from "./pages/BoasVindasBrPower";
import Cobrancas from "./pages/Cobrancas";
import Eventos from "./pages/Eventos";
import Rastreamento from "./pages/Rastreamento";
import Termos from "./pages/Termos";
import Correios from "./pages/Correios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<BoasVindas />} />
            <Route path="/boas-vindas" element={<BoasVindas />} />
            <Route path="/boas-vindas/adesao" element={<BoasVindasAdesao />} />
            <Route path="/boas-vindas/br-power" element={<BoasVindasBrPower />} />
            <Route path="/cobrancas" element={<Cobrancas />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/rastreamento" element={<Rastreamento />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/correios" element={<Correios />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
