const activeClasses = "bg-brand-primary/10 text-brand-primary font-medium";
const inactiveClasses = "text-gray-700 hover:bg-gray-100";

const baseMenuLinkClasses = "flex items-center px-4 py-2 text-sm transition-colors";

export const getMenuItemClasses = (isActive: boolean) => {
    return `${baseMenuLinkClasses} ${isActive ? activeClasses : inactiveClasses}`;
};

export const getSubmenuButtonClasses = (isActive: boolean) => {
    return `${baseMenuLinkClasses} w-full text-left ${isActive ? activeClasses : inactiveClasses}`;
};

export const styles = {
    content: "bg-white border-r border-gray-200",
    header: "p-4 border-b border-gray-200",
    headerContent: "flex items-center gap-2",
    logo: "w-8 h-8 rounded object-contain",
    brand: "font-bold text-brand-primary",
    group: "py-4",
    groupLabel: "text-gray-600 font-semibold text-xs tracking-wider px-4 py-2",
    icon: "h-4 w-4 mr-3",
    chevron: "h-4 w-4",
    submenuWrapper: "ml-6",
    externalLink: "flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors",
    footer: "mt-auto p-4 border-t border-gray-200",
    footerContent: "text-xs text-center text-gray-500",
    footerTitle: "font-medium",
    footerNadla: "text-brand-primary",
    footerCopyright: "mt-2",
}; 