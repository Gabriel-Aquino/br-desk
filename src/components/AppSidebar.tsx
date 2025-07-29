import { useState } from "react";
import React from "react";
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
import { styles, getMenuItemClasses, getSubmenuButtonClasses } from "./AppSidebar.styles";

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
  {
    title: "EVENTOS",
    icon: Calendar,
    submenu: [
      { title: "Assistência 24h", url: "/eventos/assistencia-24h" },
      { title: "Agendamento Oficina", url: "/eventos/agendamento-oficina" }
    ]
  },
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
  {
    title: "Assistente Virtual Nadla",
    url: "https://notebooklm.google.com/",
    icon: <img src="/Images/nadla.png" alt="Nadla" />
  }
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
      <SidebarContent className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <img src="/Images/brclube2.png" alt="BR Clube Logo" className={styles.logo} />
            {!isCollapsed && <span className={styles.brand}>BR Clube</span>}
          </div>
        </div>

        <SidebarGroup className={styles.group}>
          <SidebarGroupLabel className={styles.groupLabel}>
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
                          className={getSubmenuButtonClasses(isSubmenuActive(item.submenu))}
                        >
                          <item.icon className={styles.icon} />
                          {!isCollapsed && (
                            <>
                              <span className="flex-1">{item.title}</span>
                              {openMenus.includes(item.title) ? (
                                <ChevronDown className={styles.chevron} />
                              ) : (
                                <ChevronRight className={styles.chevron} />
                              )}
                            </>
                          )}
                        </button>
                      </SidebarMenuButton>
                      {openMenus.includes(item.title) && !isCollapsed && (
                        <div className={styles.submenuWrapper}>
                          {item.submenu.map((subItem) => (
                            <SidebarMenuButton key={subItem.title} asChild>
                              <NavLink
                                to={subItem.url}
                                end
                                className={({ isActive }) => getMenuItemClasses(isActive)}
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
                        className={({ isActive }) => getMenuItemClasses(isActive)}
                      >
                        <item.icon className={styles.icon} />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className={styles.group}>
          <SidebarGroupLabel className={styles.groupLabel}>
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
                      className={styles.externalLink}
                    >
                      {item.icon ? React.cloneElement(item.icon, { className: styles.icon }) : <ExternalLink className={styles.icon} />}
                      {!isCollapsed && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className={styles.footer}>
          <div className={styles.footerContent}>
            {!isCollapsed && (
              <>
                <div className={styles.footerCopyright}>© BR CLUBE | 2024</div>
                <div>Todos os direitos reservados</div>
              </>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}