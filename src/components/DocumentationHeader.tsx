import { Menu } from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

interface DocumentationHeaderProps {
    onMenuClick: () => void;
}

export const DocumentationHeader = ({ onMenuClick }: DocumentationHeaderProps) => {
    return (
        <header className="fixed top-0 left-0 right-0 h-14 sm:h-16 bg-background/95 backdrop-blur-sm border-b border-border z-40">
            <div className="flex items-center justify-between h-full px-4 sm:px-6">
                <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onMenuClick}
                        className="lg:hidden p-2"
                    >
                        <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>

                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-primary-foreground font-bold text-xs sm:text-sm">CE</span>
                        </div>
                        <div className="min-w-0">
                            <h1 className="text-sm sm:text-lg font-semibold text-foreground truncate">
                                Code Execution Engine
                            </h1>
                            <p className="text-xs text-muted-foreground hidden sm:block">
                                Multi-language execution platform
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2 flex-shrink-0">
                    <div className="hidden sm:flex items-center text-xs sm:text-sm text-muted-foreground">
                        <span className="inline-flex items-center space-x-1">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span>v1.0.2</span>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};
