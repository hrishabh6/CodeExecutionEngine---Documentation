import Introduction from "@/components/content/Introduction.tsx";
import Prerequisits from "@/components/content/Prerequisits.tsx";
import Installation from "@/components/content/Installation.tsx";
import QuickStart from "@/components/content/QuickStart.tsx";
import Usage from "@/components/content/Usage.tsx";
import LanguageSupport from "@/components/content/LanguageSupport.tsx";
import FutureScope from "@/components/content/FutureScope.tsx";
import CustomDS from "@/components/content/CustomDS.tsx";

export const DocumentationContent = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 lg:space-y-16 animate-fade-in">
            {/* Introduction */}
            <Introduction/>

            {/* Prerequisites */}
            <Prerequisits/>

            {/* Installation */}
            <Installation/>

            {/* Quick Start */}
            <QuickStart/>

            {/* Usage */}
            <Usage/>

            {/* Language Support */}
            <LanguageSupport/>

            {/* Custom Data Structures */}
            <CustomDS/>

            {/* Future Scope */}
            <FutureScope/>
        </div>
    );
};
