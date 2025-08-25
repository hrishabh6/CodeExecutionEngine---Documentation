import { useState } from 'react';
import {CodeBlock} from "@/components/CodeBlock.tsx";




const Installation = () => {
    const [selectedBuildTool, setSelectedBuildTool] = useState('maven');

    const buildTools = [
        { id: 'maven', name: 'Maven', icon: '📦' },
        { id: 'gradle', name: 'Gradle', icon: '🐘' }
    ];

    return (
        <section id="installation" className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Installation</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Add the Code Execution Engine library to your Spring Boot project using your preferred build tool.
            </p>

            {/* Build Tool Tabs */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
                {/* Tab Headers */}
                <div className="flex border-b border-border">
                    {buildTools.map((tool) => (
                        <button
                            key={tool.id}
                            onClick={() => setSelectedBuildTool(tool.id)}
                            className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-colors duration-200 touch-manipulation ${
                                selectedBuildTool === tool.id
                                    ? 'bg-primary/10 text-primary border-b-2 border-primary'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            }`}
                        >
                            <span className="mr-1 sm:mr-2 text-sm sm:text-base">{tool.icon}</span>
                            <span className="hidden xs:inline sm:inline">{tool.name}</span>
                            <span className="xs:hidden sm:hidden">{tool.name.charAt(0)}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="p-4 sm:p-6">
                    {selectedBuildTool === 'maven' && (
                        <div className="space-y-4">
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    title="pom.xml"
                                    language="xml"
                                    code={`<dependency>
    <groupId>xyz.hrishabhjoshi</groupId>
    <artifactId>CodeExecutionEngine</artifactId>
    <version>1.0.2</version>
</dependency>

<!-- Spring Boot dependencies (if not already included) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>`}
                                />
                            </div>
                        </div>
                    )}

                    {selectedBuildTool === 'gradle' && (
                        <div className="space-y-4">
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    title="build.gradle"
                                    language="groovy"
                                    code={`dependencies {
    implementation 'xyz.hrishabhjoshi:CodeExecutionEngine:1.0.2'

    
    // Spring Boot dependencies (if not already included)
    implementation 'org.springframework.boot:spring-boot-starter'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
}`}
                                />
                            </div>

                            <div className="mt-4 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                                <h4 className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                                    💡 Gradle Kotlin DSL
                                </h4>
                                <p className="text-xs text-blue-700 dark:text-blue-300 mb-3">
                                    If you're using Gradle with Kotlin DSL (build.gradle.kts):
                                </p>
                                <div className="overflow-x-auto">
                                    <CodeBlock
                                        title="build.gradle.kts"
                                        language="kotlin"
                                        code={`dependencies {
    iimplementation("xyz.hrishabhjoshi:CodeExecutionEngine:1.0.2")

    
    // Spring Boot dependencies (if not already included)
    implementation("org.springframework.boot:spring-boot-starter")
    implementation("org.springframework.boot:spring-boot-starter-validation")
}`}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">🐳 Docker Requirements</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    The Code Execution Engine uses Docker containers for secure code execution. Ensure Docker is installed and running on your system.
                </p>

                <div className="overflow-x-auto">
                    <CodeBlock
                        title="Required Docker Images"
                        language="bash"
                        code={`# Pull required Docker images for language support
docker pull hrishabhjoshi/my-java-runtime:17
docker pull hrishabhjoshi/python-runtime:3.9`}
                    />
                </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">⚡ Quick Setup</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Add the CodeExecutionManager as a Spring Bean in your configuration:
                </p>

                <div className="overflow-x-auto">
                    <CodeBlock
                        title="Configuration"
                        language="java"
                        code={`@Configuration
public class CodeExecutionConfig {
    
    @Bean
    public CodeExecutionManager codeExecutionManager() {
        return new CodeExecutionManager();
    }
}`}
                    />
                </div>
            </div>
        </section>
    );
};

export default Installation;
