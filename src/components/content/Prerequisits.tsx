import { CodeBlock } from "@/components/CodeBlock.tsx";

const Prerequisites = () => {
    return (
        <section id="prerequisites" className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Prerequisites</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Before integrating the Code Execution Engine, ensure your environment meets the following requirements
                for secure and reliable code execution.
            </p>

            <div className="grid gap-4 sm:gap-6">
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">System Requirements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <h4 className="font-medium mb-3 text-foreground text-sm sm:text-base">Core Dependencies</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                    <div className="min-w-0">
                                        <strong>Java 17+</strong> - Required for the execution engine
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                    <div className="min-w-0">
                                        <strong>Apache Maven 3.8+</strong> - Build automation
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                    <div className="min-w-0">
                                        <strong>Docker 20.10+</strong> - Container orchestration
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                    <div className="min-w-0">
                                        <strong>Spring Boot 3.0+</strong> - Framework integration
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-3 text-foreground text-sm sm:text-base">Language Runtimes</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                    <div className="min-w-0">
                                        <strong>Python 3.9+</strong> - For Python code execution
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                    <div className="min-w-0">
                                        <strong>GCC 11+</strong> - For C++ compilation
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                    <div className="min-w-0">
                                        <strong>Node.js 18+</strong> - For JavaScript execution
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                                    <div className="min-w-0">
                                        <strong>.NET 6+</strong> - For C# support
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Maven Dependencies</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        Add the following dependencies to your <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">pom.xml</code>:
                    </p>
                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="pom.xml"
                            language="xml"
                            code={`<dependencies>
    <!-- Code Execution Engine Core -->
    <dependency>
        <groupId>xyz.hrishabhjoshi</groupId>
        <artifactId>CodeExecutionEngine</artifactId>
        <version>1.0.2</version>
    </dependency>
    
    <!-- Spring Boot Starter -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter</artifactId>
        <version>3.1.0</version>
    </dependency>
    
    <!-- JSON Processing -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.15.2</version>
    </dependency>
    
    <!-- Lombok for DTOs -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.28</version>
        <scope>provided</scope>
    </dependency>
    
    <!-- Docker Java Client -->
    <dependency>
        <groupId>com.github.docker-java</groupId>
        <artifactId>docker-java-core</artifactId>
        <version>3.3.0</version>
    </dependency>
    
    <!-- Apache Commons -->
    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-lang3</artifactId>
        <version>3.12.0</version>
    </dependency>
</dependencies>`}
                        />
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Docker Setup</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium mb-2 text-foreground text-sm sm:text-base">Base Images Required:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="bash"
                                    code={`# Pull required base images
docker pull hrishabhjoshi/my-java-runtime:17
docker pull hrishabhjoshi/python-runtime:3.9

# Verify Docker installation
docker --version
docker-compose --version`}
                                />
                            </div>
                        </div>


                    </div>
                </div>



                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Application Configuration</h3>
                    <div className="gap-4">

                        <div>
                            <h4 className="font-medium mb-2 text-foreground text-sm sm:text-base">Bean Configuration:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="java"
                                    code={`@Configuration
@EnableConfigurationProperties
public class CodeExecutionConfig {
    
    @Bean
    public CodeExecutionManager codeExecutionManager() {
        return new CodeExecutionManager();
    }
    
}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Security Considerations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <h4 className="font-medium mb-3 text-foreground text-sm sm:text-base">Container Security</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li>• Network isolation (--network none)</li>
                                <li>• Resource limits (memory, CPU, disk)</li>
                                <li>• Read-only filesystem with tmpfs</li>
                                <li>• Non-privileged user execution</li>
                                <li>• Capability restrictions</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-3 text-foreground text-sm sm:text-base">Application Security</h4>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li>• Input validation and sanitization</li>
                                <li>• Execution timeouts</li>
                                <li>• File system sandboxing</li>
                                <li>• Code injection prevention</li>
                                <li>• Audit logging</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Installation Verification</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        Run these commands to verify your setup:
                    </p>
                    <div className="overflow-x-auto">
                        <CodeBlock
                            language="bash"
                            code={`# Check Java version
java -version
javac -version

# Verify Docker
docker run hello-world
docker run --rm hrishabhjoshi/my-java-runtime:17 java -version

# Test Maven build
mvn clean compile test

# Check database connectivity
mysql -u root -p -e "SELECT VERSION();"

# Verify file permissions
ls -la /tmp/code-execution
whoami`}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prerequisites;
