import { useState } from "react";
import { DocumentationHeader } from "@/components/DocumentationHeader.tsx";
import { DocumentationContent } from "@/components/DocumentationContent.tsx";
import { DocumentationSidebar } from "@/components/DocumentationSidebar.tsx";
import { cn } from "@/lib/utils";

const Index = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="min-h-screen bg-background dark">
            <DocumentationHeader onMenuClick={toggleSidebar} />

            <div className="flex">
                <DocumentationSidebar
                    isOpen={sidebarOpen}
                    onClose={closeSidebar}
                />

                <main className={cn(
                    "flex-1 transition-all duration-300 ease-in-out",
                    "pt-14 sm:pt-16", // Responsive header offset
                    "lg:ml-72 xl:ml-80", // Desktop sidebar offset
                    "min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)]",
                    "w-0" // Critical: Force flex item to shrink
                )}>
                    <div className="px-3 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 custom-scrollbar h-full">
                        <DocumentationContent />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Index;