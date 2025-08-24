const Introduction = () => {
    return (
        <section id="introduction" className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    Code Execution Engine v1.0.2
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    A secure, scalable Java library for executing user-submitted code in sandboxed environments.
                    Perfect for online judges, coding platforms, and educational applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">🚀 Key Features</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                        <li>• Multi-language support (Java, Python, C++, JavaScript, C#)</li>
                        <li>• Docker-based sandboxed execution</li>
                        <li>• Custom data structure support (LinkedList, TreeNode, etc.)</li>
                        <li>• Real-time execution logging</li>
                        <li>• Comprehensive error handling and validation</li>
                        <li>• Test case execution with detailed outputs</li>
                    </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">🎯 Use Cases</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                        <li>• LeetCode-style coding platforms</li>
                        <li>• Online programming contests</li>
                        <li>• Technical interview systems</li>
                        <li>• Educational coding environments</li>
                        <li>• Automated code assessment tools</li>
                        <li>• Algorithm validation systems</li>
                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">🔐 Security First</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                    Built with security as a priority, the engine executes all user code in isolated Docker containers
                    with strict resource limits and comprehensive input validation to prevent malicious code execution.
                </p>
            </div>
        </section>
    )
}

export default Introduction
