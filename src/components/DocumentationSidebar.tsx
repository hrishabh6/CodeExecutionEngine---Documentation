import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils.ts";
import { navigationSections } from "@/lib/constants.ts";

interface DocumentationSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DocumentationSidebar = ({ isOpen, onClose }: DocumentationSidebarProps) => {
    const [activeSection, setActiveSection] = useState<string>("introduction");
    const [expandedSections, setExpandedSections] = useState<Set<string>>(
        new Set(["getting-started"])
    );

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigationSections.flatMap(section => section.items);
            const currentSection = sections.find(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= window.innerHeight / 2;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (window.innerWidth < 1024) {
            onClose();
        }
    };

    const toggleSection = (sectionId: string) => {
        const newExpanded = new Set(expandedSections);
        if (newExpanded.has(sectionId)) {
            newExpanded.delete(sectionId);
        } else {
            newExpanded.add(sectionId);
        }
        setExpandedSections(newExpanded);
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={cn(
                "fixed left-0 top-14 sm:top-16 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] w-full sm:w-80 bg-sidebar border-r border-sidebar-border z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:w-80",
                isOpen ? "translate-x-0 animate-slide-in" : "-translate-x-full"
            )}>
                <div className="p-4 sm:p-6 custom-scrollbar overflow-y-auto h-full">
                    <div className="space-y-2">
                        {navigationSections.map((section) => (
                            <div key={section.id} className="space-y-1">
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="flex items-center justify-between w-full px-3 py-2 sm:py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors touch-manipulation"
                                >
                                    <span className="text-left">{section.title}</span>
                                    {expandedSections.has(section.id) ? (
                                        <ChevronDown className="h-4 w-4 flex-shrink-0" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                                    )}
                                </button>

                                {expandedSections.has(section.id) && (
                                    <div className="pl-4 space-y-1 animate-fade-in">
                                        {section.items.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className={cn(
                                                    "block w-full text-left px-3 py-2 sm:py-2 text-sm rounded-lg transition-all duration-200 touch-manipulation",
                                                    activeSection === item.id
                                                        ? "nav-active"
                                                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                                )}
                                            >
                                                <span className="block truncate">{item.title}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
