import {CodeBlock} from "@/components/CodeBlock.tsx";

const QuickStart = () => {
    return (
        <section id="quick-start" className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Quick Start</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Get started with the Code Execution Engine in just a few steps. This example shows how to execute a simple algorithm problem.
            </p>

            <div className="space-y-4 sm:space-y-6">
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">Step 1: Configure Spring Bean</h3>
                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Configuration Class"
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

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">Step 2: Create Question Metadata</h3>
                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Setup Question Metadata"
                            language="java"
                            code={`// Define function parameters
List<ParamInfoDTO> parameters = Arrays.asList(
    new ParamInfoDTO("nums", "int[]"),
    new ParamInfoDTO("target", "int")
);

// Create question metadata
CodeSubmissionDTO.QuestionMetadata metadata = CodeSubmissionDTO.QuestionMetadata.builder()
    .fullyQualifiedPackageName("com.algocrack.solution.q1")
    .functionName("twoSum")
    .returnType("int[]")
    .parameters(parameters)
    .customDataStructureNames(Map.of()) // Empty for basic types
    .build();`}
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">Step 3: Prepare Test Cases</h3>
                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Test Case Setup"
                            language="java"
                            code={`// Create test cases
List<Map<String, Object>> testCases = Arrays.asList(
    Map.of(
        "input", Map.of(
            "nums", Arrays.asList(2, 7, 11, 15),
            "target", 9
        ),
        "expectedOutput", Arrays.asList(0, 1)
    ),
    Map.of(
        "input", Map.of(
            "nums", Arrays.asList(3, 2, 4),
            "target", 6
        ),
        "expectedOutput", Arrays.asList(1, 2)
    )
);`}
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">Step 4: Execute Code</h3>
                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Complete Example"
                            language="java"
                            code={`@Service
public class CodeRunner {
    
    @Autowired
    private CodeExecutionManager codeExecutionManager;
    
    public CodeExecutionResultDTO executeUserCode() {
        // User's solution code
        String userCode = """
            public int[] twoSum(int[] nums, int target) {
                Map<Integer, Integer> map = new HashMap<>();
                for (int i = 0; i < nums.length; i++) {
                    int complement = target - nums[i];
                    if (map.containsKey(complement)) {
                        return new int[]{map.get(complement), i};
                    }
                    map.put(nums[i], i);
                }
                throw new IllegalArgumentException("No solution found");
            }
            """;
        
        // Build submission DTO
        CodeSubmissionDTO submission = CodeSubmissionDTO.builder()
            .submissionId("12345")
            .language("java")
            .userSolutionCode(userCode)
            .questionMetadata(metadata)
            .testCases(testCases)
            .build();
        
        // Execute with logging
        Consumer<String> logConsumer = logLine -> {
            System.out.println("LOG: " + logLine);
        };
        
        return codeExecutionManager.runCodeWithTestcases(submission, logConsumer);
    }
}`}
                        />
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">💡 What Happens Next?</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                        <li>• The engine generates executable code files</li>
                        <li>• Code is compiled in a Docker container</li>
                        <li>• Each test case is executed securely</li>
                        <li>• Results are collected and returned as <code className="text-xs sm:text-sm bg-muted px-1 py-0.5 rounded break-all">CodeExecutionResultDTO</code></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default QuickStart
