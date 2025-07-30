import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import BoasVindas from "./pages/BoasVindas";
import BoasVindasAdesao from "./pages/BoasVindasAdesao";
import BoasVindasBrPower from "./pages/BoasVindasBrPower";
import Cobrancas from "./pages/Cobrancas";
import Eventos from "./pages/Eventos";
import Assistencia24h from "./pages/Assistencia24h";
import AgendamentoOficina from "./pages/AgendamentoOficina";
import Rastreamento from "./pages/Rastreamento";
import Termos from "./pages/Termos";
import Correios from "./pages/Correios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("authToken"));
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse: any) => {
    localStorage.setItem("authToken", credentialResponse.credential);
    setIsAuthenticated(true);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} onLogout={handleLogout} />}>
        <Route path="/" element={<BoasVindas />} />
        <Route path="/boas-vindas/adesao" element={<BoasVindasAdesao />} />
        <Route path="/boas-vindas/br-power" element={<BoasVindasBrPower />} />
        <Route path="/cobrancas" element={<Cobrancas />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/eventos/assistencia-24h" element={<Assistencia24h />} />
        <Route path="/eventos/agendamento-oficina" element={<AgendamentoOficina />} />
        <Route path="/rastreamento" element={<Rastreamento />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/correios" element={<Correios />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
