import {CodeBlock} from "@/components/CodeBlock.tsx";

const Usage = () => {
    return (
        <section id="usage" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Usage</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Learn how to use the Code Execution Engine's core components to execute user-submitted code safely and efficiently.
            </p>

            <div className="space-y-8 sm:space-y-12">
                {/* CodeExecutionManager Section */}
                <div id="code-execution-manager">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">CodeExecutionManager</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        The main entry point for executing user code. Inject it as a Spring Bean and use the <code className="text-xs sm:text-sm bg-muted px-1 py-0.5 rounded break-all">runCodeWithTestcases</code> method.
                    </p>

                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Basic Usage"
                            language="java"
                            code={`@Service
public class CodeRunnerService {
    
    @Autowired
    private CodeExecutionManager codeExecutionManager;
    
    public void processSubmission(SubmissionDto submissionDto) {
        // 1. Build the CodeSubmissionDTO
        CodeSubmissionDTO codeSubmissionDTO = CodeSubmissionDTO.builder()
            .submissionId(String.valueOf(submissionDto.getSubmissionId()))
            .language(submissionDto.getLanguage()) // "java", "python", "cpp", etc.
            .userSolutionCode(submissionDto.getCode())
            .questionMetadata(questionMetadata) // Details about function signature
            .testCases(testCases) // List of input/output test cases
            .build();

        // 2. Create log consumer for real-time logging
        Consumer<String> logConsumer = logLine -> {
            System.out.println("EXECUTION LOG: " + logLine);
            // Send logs to Kafka, database, or client via WebSocket
        };

        // 3. Execute the code
        CodeExecutionResultDTO result = codeExecutionManager.runCodeWithTestcases(
            codeSubmissionDTO, 
            logConsumer
        );

        // 4. Process results
        System.out.println("Status: " + result.getOverallStatus());
        System.out.println("Compilation Output: " + result.getCompilationOutput());
        
        for (CodeExecutionResultDTO.TestCaseOutput output : result.getTestCaseOutputs()) {
            System.out.println("Test " + output.getTestCaseIndex() + 
                ": " + output.getActualOutput() + 
                " (took " + output.getExecutionTimeMs() + "ms)");
        }
    }
}`}
                        />
                    </div>
                </div>

                {/* Input DTO Section */}
                <div id="input-dto">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">CodeSubmissionDTO - Input Structure</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        The input DTO that contains all necessary information for code execution.
                    </p>

                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Creating CodeSubmissionDTO"
                            language="java"
                            code={`// 1. Define function parameters
List<ParamInfoDTO> parameters = Arrays.asList(
    new ParamInfoDTO("head", "ListNode"),
    new ParamInfoDTO("val", "int")
);

// 2. Handle custom data structures (like ListNode, TreeNode)
Map<String, String> customDataStructures = Map.of(
    "ListNode", "ListNode",
    "TreeNode", "TreeNode"
    // Maps custom type name to actual class name
);

// 3. Create question metadata
CodeSubmissionDTO.QuestionMetadata questionMetadata = CodeSubmissionDTO.QuestionMetadata.builder()
    .fullyQualifiedPackageName("com.algocrack.solution.q21") // Package name for generated code
    .functionName("removeElements") // Method name to execute
    .returnType("ListNode") // Return type
    .parameters(parameters) // Function parameters with names and types
    .customDataStructureNames(customDataStructures) // Custom classes needed
    .build();

// 4. Prepare test cases
List<Map<String, Object>> testCases = Arrays.asList(
    Map.of(
        "input", Map.of(
            "head", Arrays.asList(1, 2, 6, 3, 4, 5, 6), // Will be converted to ListNode
            "val", 6
        ),
        "expectedOutput", Arrays.asList(1, 2, 3, 4, 5) // Expected result
    )
);

// 5. Build complete submission
CodeSubmissionDTO submission = CodeSubmissionDTO.builder()
    .submissionId("submission_123")
    .language("java") // Supported: "java", "python", "cpp", "javascript", "csharp"
    .userSolutionCode(userCode) // The actual solution code
    .questionMetadata(questionMetadata)
    .testCases(testCases)
    .build();`}
                        />
                    </div>
                </div>

                {/* Output DTO Section */}
                <div id="output-dto">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">CodeExecutionResultDTO - Output Structure</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        Understanding the execution results and how to handle different scenarios.
                    </p>

                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Handling Execution Results"
                            language="java"
                            code={`public void handleExecutionResult(CodeExecutionResultDTO result) {
    
    // Check overall execution status
    switch (result.getOverallStatus()) {
        case SUCCESS:
            System.out.println("✅ Code executed successfully");
            break;
        case COMPILATION_ERROR:
            System.out.println("❌ Compilation failed: " + result.getCompilationOutput());
            return;
        case RUNTIME_ERROR:
            System.out.println("💥 Runtime error occurred");
            break;
        case TIMEOUT:
            System.out.println("⏱️ Execution timed out");
            break;
        case INTERNAL_ERROR:
            System.out.println("🔧 Internal system error");
            break;
    }
    
    // Process individual test case results
    for (CodeExecutionResultDTO.TestCaseOutput testOutput : result.getTestCaseOutputs()) {
        
        System.out.printf("Test Case %d:%n", testOutput.getTestCaseIndex());
        System.out.printf("  Output: %s%n", testOutput.getActualOutput());
        System.out.printf("  Execution Time: %dms%n", testOutput.getExecutionTimeMs());
        
        // Handle errors for this test case
        if (testOutput.getErrorMessage() != null) {
            System.out.printf("  Error: %s (%s)%n", 
                testOutput.getErrorMessage(), 
                testOutput.getErrorType());
        }
        
        // Compare with expected output (you need to implement this logic)
        boolean passed = compareWithExpected(testOutput.getActualOutput(), expectedOutput);
        System.out.printf("  Result: %s%n", passed ? "PASS" : "FAIL");
    }
}

private boolean compareWithExpected(String actual, Object expected) {
    // Implement your comparison logic here
    // Parse JSON output, handle different data types, etc.
    return actual.trim().equals(expected.toString());
}`}
                        />
                    </div>
                </div>

                {/* Language Support */}
                <div id="language-examples">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">Multi-Language Support</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        The engine supports multiple programming languages. Here's how to handle different languages:
                    </p>

                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Language-Specific Execution"
                            language="java"
                            code={`public CodeExecutionResultDTO executeForLanguage(String language, String code) {
    
    // Language-specific considerations
    CodeSubmissionDTO.QuestionMetadata metadata;
    
    switch (language.toLowerCase()) {
        case "java":
            metadata = CodeSubmissionDTO.QuestionMetadata.builder()
                .functionName("solution")
                .returnType("int[]")
                .parameters(Arrays.asList(new ParamInfoDTO("nums", "int[]")))
                .build();
            break;
            
        case "python":
            metadata = CodeSubmissionDTO.QuestionMetadata.builder()
                .functionName("solution")
                .returnType("List[int]") // Python-style type hints
                .parameters(Arrays.asList(new ParamInfoDTO("nums", "List[int]")))
                .build();
            break;
            
        case "cpp":
            metadata = CodeSubmissionDTO.QuestionMetadata.builder()
                .functionName("solution")
                .returnType("vector<int>")
                .parameters(Arrays.asList(new ParamInfoDTO("nums", "vector<int>&")))
                .build();
            break;
    }
    
    CodeSubmissionDTO submission = CodeSubmissionDTO.builder()
        .language(language)
        .userSolutionCode(code)
        .questionMetadata(metadata)
        .testCases(getTestCases())
        .build();
    
    return codeExecutionManager.runCodeWithTestcases(submission, System.out::println);
}`}
                        />
                    </div>
                </div>

                {/* Error Handling */}
                <div id="error-handling">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">Error Handling Best Practices</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        How to handle different types of errors and edge cases in code execution.
                    </p>

                    <div className="overflow-x-auto">
                        <CodeBlock
                            title="Comprehensive Error Handling"
                            language="java"
                            code={`@Service
public class RobustCodeExecutionService {
    
    @Autowired
    private CodeExecutionManager codeExecutionManager;
    
    public ExecutionSummary executeWithErrorHandling(CodeSubmissionDTO submission) {
        
        try {
            // Validate submission before execution
            validateSubmission(submission);
            
            // Execute code with timeout handling
            CodeExecutionResultDTO result = codeExecutionManager.runCodeWithTestcases(
                submission, 
                this::logExecutionDetails
            );
            
            return processResult(result);
            
        } catch (Exception e) {
            return ExecutionSummary.builder()
                .status("SYSTEM_ERROR")
                .message("Failed to execute code: " + e.getMessage())
                .build();
        }
    }
    
    private void validateSubmission(CodeSubmissionDTO submission) {
        if (submission.getUserSolutionCode() == null || submission.getUserSolutionCode().trim().isEmpty()) {
            throw new IllegalArgumentException("Code cannot be empty");
        }
        
        if (submission.getTestCases() == null || submission.getTestCases().isEmpty()) {
            throw new IllegalArgumentException("At least one test case is required");
        }
        
        if (submission.getQuestionMetadata() == null) {
            throw new IllegalArgumentException("Question metadata is required");
        }
    }
    
    private void logExecutionDetails(String logLine) {
        // Log to your preferred logging system
        System.out.println("[EXEC] " + logLine);
        
        // Send to monitoring systems, WebSocket clients, etc.
        if (logLine.contains("ERROR") || logLine.contains("Exception")) {
            // Handle error-specific logging
            alertingService.sendAlert("Code execution error: " + logLine);
        }
    }
}`}
                        />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">🚨 Important Notes</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                        <li>• The engine only executes code - it doesn't compare outputs with expected results</li>
                        <li>• You need to implement your own output comparison logic</li>
                        <li>• All code execution happens in isolated Docker containers</li>
                        <li>• Real-time logs are provided through the Consumer&lt;String&gt; callback</li>
                        <li>• Custom data structures (ListNode, TreeNode) are automatically handled</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Usage
