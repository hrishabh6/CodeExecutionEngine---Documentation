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
        <artifactId>code-execution-engine</artifactId>
        <version>1.0.0</version>
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
docker pull openjdk:17-jdk-slim
docker pull python:3.11-slim
docker pull gcc:11
docker pull node:18-alpine
docker pull mcr.microsoft.com/dotnet/runtime:6.0

# Verify Docker installation
docker --version
docker-compose --version`}
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2 text-foreground text-sm sm:text-base">Security Configuration:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="bash"
                                    code={`# Create isolated user for code execution
sudo useradd -r -s /bin/false -M coderunner
sudo usermod -aG docker coderunner

# Set up resource limits
echo "*               soft    nproc           100" >> /etc/security/limits.conf
echo "*               hard    nproc           200" >> /etc/security/limits.conf
echo "*               soft    fsize           10240" >> /etc/security/limits.conf
echo "*               hard    fsize           20480" >> /etc/security/limits.conf`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Database Configuration</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        The engine requires database tables for question metadata and test cases. Here's the basic schema:
                    </p>
                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Database Schema"
                            language="sql"
                            code={`-- Question Metadata Table
CREATE TABLE question_metadata (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL,
    language ENUM('JAVA', 'PYTHON', 'CPP', 'JAVASCRIPT', 'CSHARP') NOT NULL,
    function_name VARCHAR(100) NOT NULL,
    return_type VARCHAR(100) NOT NULL,
    fully_qualified_package_name VARCHAR(255),
    custom_data_structure_names JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    UNIQUE KEY uk_question_language (question_id, language),
    INDEX idx_question_id (question_id)
);

-- Parameter Information Table
CREATE TABLE param_info (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_metadata_id BIGINT NOT NULL,
    param_name VARCHAR(50) NOT NULL,
    param_type VARCHAR(100) NOT NULL,
    param_order INT NOT NULL,
    
    FOREIGN KEY (question_metadata_id) REFERENCES question_metadata(id) ON DELETE CASCADE,
    INDEX idx_metadata_order (question_metadata_id, param_order)
);

-- Test Cases Table
CREATE TABLE test_case (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT NOT NULL,
    input JSON NOT NULL,
    expected_output JSON NOT NULL,
    order_index INT NOT NULL DEFAULT 0,
    is_public BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_question_order (question_id, order_index)
);`}
                        />
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Application Configuration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2 text-foreground text-sm sm:text-base">application.yml:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="yaml"
                                    code={`spring:
  application:
    name: code-execution-service
  datasource:
    url: jdbc:mysql://localhost:3306/algocrack
    username: \${DB_USERNAME:root}
    password: \${DB_PASSWORD:password}
    driver-class-name: com.mysql.cj.jdbc.Driver
  
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL8Dialect

code-execution:
  docker:
    enabled: true
    timeout: 10s
    memory-limit: 256m
    cpu-limit: 0.5
    network-mode: none
  
  working-directory: /tmp/code-execution
  max-concurrent-executions: 10
  
  languages:
    java:
      enabled: true
      compiler: javac
      runtime: java
      timeout: 10000
    python:
      enabled: true
      interpreter: python3
      timeout: 10000
    cpp:
      enabled: true
      compiler: g++
      flags: "-std=c++17 -O2"
      timeout: 10000

logging:
  level:
    xyz.hrishabhjoshi.codeexecutionengine: DEBUG
    com.hrishabh.algocrack: INFO`}
                                />
                            </div>
                        </div>
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
    
    @Bean
    @ConditionalOnProperty(name = "code-execution.docker.enabled", 
                           havingValue = "true")
    public DockerClient dockerClient() {
        return DockerClientBuilder
            .getInstance()
            .build();
    }
    
    @Bean
    public FileGeneratorFactory fileGeneratorFactory() {
        return new FileGeneratorFactory();
    }
    
    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(
            DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, 
            false
        );
        return mapper;
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
docker run --rm openjdk:17-jdk-slim java -version

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
