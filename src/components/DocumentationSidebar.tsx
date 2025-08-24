import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationSections } from "@/lib/constants.ts";


interface DocumentationSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}



// Mobile-responsive Documentation Header

// Mobile-responsive Documentation Sidebar
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
                "fixed left-0 top-14 sm:top-16 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] w-72 sm:w-80 bg-sidebar border-r border-sidebar-border z-50 transition-transform duration-300 ease-in-out lg:translate-x-0",
                isOpen ? "translate-x-0 animate-slide-in" : "-translate-x-full"
            )}>
                <div className="p-3 sm:p-6 custom-scrollbar overflow-y-auto h-full">
                    <div className="space-y-1 sm:space-y-2">
                        {navigationSections.map((section) => (
                            <div key={section.id} className="space-y-1">
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="flex items-center justify-between w-full px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent rounded-md sm:rounded-lg transition-colors"
                                >
                                    <span className="truncate">{section.title}</span>
                                    {expandedSections.has(section.id) ? (
                                        <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                    ) : (
                                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                    )}
                                </button>

                                {expandedSections.has(section.id) && (
                                    <div className="pl-2 sm:pl-4 space-y-1 animate-fade-in">
                                        {section.items.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className={cn(
                                                    "block w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg transition-all duration-200 truncate",
                                                    activeSection === item.id
                                                        ? "nav-active"
                                                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                                )}
                                            >
                                                {item.title}
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