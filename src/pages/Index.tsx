import { useState } from "react";
import {DocumentationHeader} from "@/components/DocumentationHeader.tsx";
import {DocumentationContent} from "@/components/DocumentationContent.tsx";
import {DocumentationSidebar} from "@/components/DocumentationSidebar.tsx";

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

                <main className="flex-1 lg:ml-80 pt-16">
                    <div className="p-8 custom-scrollbar">
                        <DocumentationContent />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Index;
