import { CodeBlock } from "@/components/CodeBlock.tsx";

const LanguageSupport = () => {
    return (
        <section id="supported-languages" className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Supported Languages</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The Code Execution Engine supports multiple programming languages with secure containerized execution
                and automatic file generation for seamless test case execution.
            </p>

            <div id={"java"} className="grid gap-4 sm:gap-6">
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground flex items-center">
                        <span className="w-3 h-3 bg-[#f89820] rounded mr-2 sm:mr-3 flex-shrink-0"></span>
                        <span>Java</span>
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        Full Java support with automatic compilation, custom data structure generation, and comprehensive error handling.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">Generated Files:</h4>
                            <ul className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-4 space-y-1">
                                <li className="break-words">• <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs">Solution.java</code> - User's solution code with proper package structure</li>
                                <li className="break-words">• <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs">Main.java</code> - Test runner with JSON input/output parsing</li>
                                <li className="break-words">• <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs">CustomDataStructures.java</code> - Generated classes (ListNode, TreeNode, Node)</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">Package Structure:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="java"
                                    code={`package com.algocrack.solution.q12345;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // User's implementation
        return new int[]{0, 1};
    }
}`}
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">Main.java Template:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="java"
                                    code={`public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        Solution solution = new Solution();
        
        // Read test cases from stdin
        String input = readAllInput();
        List<Map<String, Object>> testCases = 
            mapper.readValue(input, new TypeReference<List<Map<String, Object>>>() {});
        
        for (int i = 0; i < testCases.size(); i++) {
            try {
                Map<String, Object> testCase = testCases.get(i);
                Object inputData = testCase.get("input");
                
                // Parse parameters based on metadata
                int[] nums = parseIntArray(inputData, "nums");
                int target = parseInt(inputData, "target");
                
                // Execute user solution
                long startTime = System.nanoTime();
                int[] result = solution.twoSum(nums, target);
                long endTime = System.nanoTime();
                
                // Output result with metadata
                System.out.println("TESTCASE_START:" + i);
                System.out.println("RESULT:" + mapper.writeValueAsString(result));
                System.out.println("TIME:" + (endTime - startTime) / 1_000_000);
                System.out.println("TESTCASE_END:" + i);
                
            } catch (Exception e) {
                System.out.println("ERROR:" + e.getClass().getSimpleName());
                System.out.println("MESSAGE:" + e.getMessage());
            }
        }
    }
}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="python" className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground flex items-center">
                        <span className="w-3 h-3 bg-[#3776ab] rounded mr-2 sm:mr-3 flex-shrink-0"></span>
                        <span>Python</span>
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        Python execution with built-in libraries, custom data structures, and comprehensive error handling.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">Generated Files:</h4>
                            <ul className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-4 space-y-1">
                                <li className="break-words">• <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs">solution.py</code> - User's solution function</li>
                                <li className="break-words">• <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs">main.py</code> - Test execution orchestrator</li>
                                <li className="break-words">• <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs">data_structures.py</code> - Custom classes (ListNode, TreeNode, Node)</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">Python Execution Example:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="python"
                                    code={`import json
import time
import sys
from typing import List, Optional
from data_structures import ListNode, TreeNode, Node

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # User's implementation injected here
        pass

def main():
    solution = Solution()
    
    # Read test cases from stdin
    input_data = sys.stdin.read()
    test_cases = json.loads(input_data)
    
    for i, test_case in enumerate(test_cases):
        try:
            input_obj = test_case['input']
            
            # Parse parameters
            nums = input_obj['nums']
            target = input_obj['target']
            
            # Execute with timing
            start_time = time.time_ns()
            result = solution.twoSum(nums, target)
            end_time = time.time_ns()
            
            # Output results
            print(f"TESTCASE_START:{i}")
            print(f"RESULT:{json.dumps(result)}")
            print(f"TIME:{(end_time - start_time) // 1_000_000}")
            print(f"TESTCASE_END:{i}")
            
        except Exception as e:
            print(f"ERROR:{e.__class__.__name__}")
            print(f"MESSAGE:{str(e)}")

if __name__ == "__main__":
    main()`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="cpp" className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground flex items-center">
                        <span className="w-3 h-3 bg-[#00599c] rounded mr-2 sm:mr-3 flex-shrink-0"></span>
                        <span>C++</span>
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        High-performance C++ execution with STL support, memory management, and automatic compilation optimization.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">Generated Files:</h4>
                            <ul className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-4 space-y-1">
                                <li className="break-words">• <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs">solution.cpp</code> - User's solution class</li>
                                <li className="break-words">• <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs">main.cpp</code> - Test execution framework</li>
                                <li className="break-words">• <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs">structures.h</code> - Custom data structure definitions</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">C++ Execution Template:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="cpp"
                                    code={`#include <iostream>
#include <vector>
#include <string>
#include <chrono>
#include <nlohmann/json.hpp>
#include "structures.h"

using namespace std;
using json = nlohmann::json;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // User's implementation injected here
        return {0, 1};
    }
};

int main() {
    Solution solution;
    string input_line;
    string full_input;
    
    // Read all input
    while (getline(cin, input_line)) {
        full_input += input_line;
    }
    
    json test_cases = json::parse(full_input);
    
    for (size_t i = 0; i < test_cases.size(); i++) {
        try {
            json test_case = test_cases[i];
            json input_data = test_case["input"];
            
            // Parse parameters
            vector<int> nums = input_data["nums"];
            int target = input_data["target"];
            
            // Execute with timing
            auto start = chrono::high_resolution_clock::now();
            vector<int> result = solution.twoSum(nums, target);
            auto end = chrono::high_resolution_clock::now();
            
            auto duration = chrono::duration_cast<chrono::milliseconds>(end - start);
            
            // Output results
            cout << "TESTCASE_START:" << i << endl;
            cout << "RESULT:" << json(result).dump() << endl;
            cout << "TIME:" << duration.count() << endl;
            cout << "TESTCASE_END:" << i << endl;
            
        } catch (const exception& e) {
            cout << "ERROR:" << typeid(e).name() << endl;
            cout << "MESSAGE:" << e.what() << endl;
        }
    }
    
    return 0;
}`}
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">Compilation Flags:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="bash"
                                    code={`# Optimized compilation with debugging symbols
g++ -std=c++17 -O2 -g -Wall -Wextra \
    -I/usr/include/nlohmann \
    -o solution main.cpp solution.cpp

# Memory-safe execution
ulimit -v 262144  # 256MB virtual memory limit
timeout 10s ./solution < input.json`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Language Detection & Execution Flow</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">Request Processing:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="java"
                                    code={`// CodeExecutionManager.runCodeWithTestcases()
public CodeExecutionResultDTO runCodeWithTestcases(
    CodeSubmissionDTO submission,
    Consumer<String> logConsumer) {
    
    // 1. Language detection and validation
    Language language = detectLanguage(submission.getLanguage());
    
    // 2. Generate appropriate files
    FileGeneratorFactory.getGenerator(language)
        .generateFiles(submission, workingDirectory);
    
    // 3. Compile code
    CompilationResult compilation = compile(language, workingDirectory);
    
    // 4. Execute test cases if compilation successful
    if (compilation.isSuccess()) {
        return executeTestCases(submission, workingDirectory, logConsumer);
    }
    
    return buildErrorResult(compilation, submission.getSubmissionId());
}`}
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">Docker Isolation:</h4>
                            <div className="overflow-x-auto">
                                <CodeBlock
                                    language="yaml"
                                    code={`# Secure execution environment
docker run --rm \
  --network none \
  --memory 256m \
  --cpus 0.5 \
  --read-only \
  --tmpfs /tmp:noexec,nosuid,size=100m \
  --user 1001:1001 \
  --security-opt no-new-privileges \
  code-executor:latest`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LanguageSupport;
