import { useState } from "react";
import { 
  Home, 
  CreditCard, 
  Calendar, 
  MapPin, 
  FileText, 
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const internalItems = [
  { 
    title: "BOAS-VINDAS", 
    icon: Home,
    submenu: [
      { title: "Boas-vindas Adesão", url: "/boas-vindas/adesao" },
      { title: "Boas-vindas BR Power", url: "/boas-vindas/br-power" }
    ]
  },
  { title: "COBRANÇAS", url: "/cobrancas", icon: CreditCard },
  { title: "EVENTOS", url: "/eventos", icon: Calendar },
  { title: "RASTREAMENTO", url: "/rastreamento", icon: MapPin },
  { title: "TERMOS", url: "/termos", icon: FileText },
  { title: "CORREIOS", url: "/correios", icon: Mail },
];

const externalItems = [
  { title: "Portal", url: "https://portal.sivisweb.com.br/loja/012/dashboard" },
  { title: "Workspace", url: "https://mail.google.com/" },
  { title: "Multi360", url: "https://painel.multi360.com.br" },
  { title: "SIVIS Br Clube", url: "https://sivisweb.com.br/login.php?ex=1&emp=012" },
  { title: "SIVIS Left", url: "https://sivisweb.com.br/login.php?ex=1&emp=013" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const isActive = (path: string) => currentPath === path;
  const isSubmenuActive = (submenu: any[]) => submenu?.some(item => isActive(item.url));
  
  const toggleMenu = (title: string) => {
    setOpenMenus(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent className="bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary text-white rounded flex items-center justify-center text-sm font-bold">
              BR
            </div>
            {!isCollapsed && <span className="font-bold text-brand-primary">BR Clube</span>}
          </div>
        </div>

        <SidebarGroup className="py-4">
          <SidebarGroupLabel className="text-gray-600 font-semibold text-xs tracking-wider px-4 py-2">
            UTILITÁRIOS
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {internalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.submenu ? (
                    <>
                      <SidebarMenuButton asChild>
                        <button
                          onClick={() => toggleMenu(item.title)}
                          className={`flex items-center w-full px-4 py-2 text-sm transition-colors text-left ${
                            isSubmenuActive(item.submenu)
                              ? "bg-brand-primary text-white font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <item.icon className="h-4 w-4 mr-3" />
                          {!isCollapsed && (
                            <>
                              <span className="flex-1">{item.title}</span>
                              {openMenus.includes(item.title) ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </>
                          )}
                        </button>
                      </SidebarMenuButton>
                      {openMenus.includes(item.title) && !isCollapsed && (
                        <div className="ml-6">
                          {item.submenu.map((subItem) => (
                            <SidebarMenuButton key={subItem.title} asChild>
                              <NavLink
                                to={subItem.url}
                                end
                                className={({ isActive }) =>
                                  `flex items-center px-4 py-2 text-sm transition-colors ${
                                    isActive
                                      ? "bg-brand-primary text-white font-medium"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`
                                }
                              >
                                <span>{subItem.title}</span>
                              </NavLink>
                            </SidebarMenuButton>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 text-sm transition-colors ${
                            isActive
                              ? "bg-brand-primary text-white font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          }`
                        }
                      >
                        <item.icon className="h-4 w-4 mr-3" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="py-4">
          <SidebarGroupLabel className="text-gray-600 font-semibold text-xs tracking-wider px-4 py-2">
            LINKS EXTERNOS
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {externalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-3" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-gray-200">
          <div className="text-xs text-center text-gray-500">
            {!isCollapsed && (
              <>
                <div className="font-medium">ASSISTENTE VIRTUAL BR CLUBE</div>
                <div className="text-brand-primary">NADLA 🔥</div>
                <div className="mt-2">© BR CLUBE | 2024</div>
                <div>Todos os direitos reservados</div>
              </>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}