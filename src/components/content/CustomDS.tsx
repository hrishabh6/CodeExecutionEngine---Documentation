import { CodeBlock } from "@/components/CodeBlock.tsx";

const CustomDS = () => {
    return (
        <section id="custom-data-structures" className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Custom Data Structures</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The engine automatically generates helper classes and methods for common data structures used in competitive programming and coding interviews.
                It handles serialization, deserialization, and conversion between JSON test cases and actual objects seamlessly.
            </p>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Supported Data Structures</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400 text-sm sm:text-base">ListNode</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2">Singly linked list with automatic array conversion</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                        <h4 className="font-semibold text-green-600 dark:text-green-400 text-sm sm:text-base">TreeNode</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2">Binary tree with level-order serialization</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-purple-50 dark:bg-purple-950 rounded-lg sm:col-span-2 md:col-span-1">
                        <h4 className="font-semibold text-purple-600 dark:text-purple-400 text-sm sm:text-base">Node</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2">Graph node with adjacency list representation</p>
                    </div>
                </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Question Metadata Structure</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    The <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">QuestionMetadata</code> DTO specifies which custom data structures are required:
                </p>
                <div className="overflow-x-auto">
                    <CodeBlock
                        title="QuestionMetadata.java"
                        language="java"
                        code={`@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public static class QuestionMetadata {
    
    private String fullyQualifiedPackageName;  // e.g., "com.algocrack.solution.q12345"
    private String functionName;               // e.g., "mergeTwoLists"
    private String returnType;                 // e.g., "ListNode", "int[]", "List<Integer>"
    
    // Parameter information with names and types
    private List<ParamInfoDTO> parameters;
    
    // Map of custom data structure names to their class definitions
    // Key: structure name (e.g., "ListNode"), Value: fully qualified class name
    private Map<String, String> customDataStructureNames;
}

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ParamInfoDTO {
    private String name;  // Parameter name (e.g., "list1", "root", "graph")
    private String type;  // Parameter type (e.g., "ListNode", "TreeNode", "int[]")
}`}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">ListNode Implementation</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3">
                        Automatically generated for linked list problems with JSON array conversion:
                    </p>
                    <div className="overflow-x-auto">
                        <CodeBlock
                            language="java"
                            code={`@JsonIgnoreProperties(ignoreUnknown = true)
private static class ListNode {
    @JsonProperty
    int val;
    @JsonProperty
    ListNode next;
    
    public ListNode() {}
    public ListNode(int val) { 
        this.val = val; 
    }
    public ListNode(int val, ListNode next) { 
        this.val = val; 
        this.next = next; 
    }
}

// Helper method: JSON array [1,2,3] -> ListNode
private static ListNode buildListNode(String jsonString, boolean isListType) 
    throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    if (jsonString.equals("null") || jsonString.equals("")) {
        return null;
    }
    List<Integer> list = mapper.readValue(jsonString, 
        mapper.getTypeFactory().constructCollectionType(List.class, Integer.class));
    
    if (list == null || list.isEmpty()) return null;
    
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    for (Integer val : list) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper method: ListNode -> JSON array [1,2,3]
private static String convertListNodeToJson(ListNode node) 
    throws JsonProcessingException {
    if (node == null) return "null";
    
    List<Integer> result = new ArrayList<>();
    ListNode current = node;
    while (current != null) {
        result.add(current.val);
        current = current.next;
    }
    return new ObjectMapper().writeValueAsString(result);
}`}
                        />
                    </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">TreeNode Implementation</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3">
                        Binary tree structure with level-order traversal serialization:
                    </p>
                    <div className="overflow-x-auto">
                        <CodeBlock
                            language="java"
                            code={`@JsonIgnoreProperties(ignoreUnknown = true)
private static class TreeNode {
    @JsonProperty
    int val;
    @JsonProperty
    TreeNode left;
    @JsonProperty
    TreeNode right;
    
    public TreeNode() {}
    public TreeNode(int val) { 
        this.val = val; 
    }
    public TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Helper method: JSON array [3,9,20,null,null,15,7] -> TreeNode
private static TreeNode buildTreeNode(String jsonString, boolean isListType) 
    throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    List<Integer> list = mapper.readValue(jsonString, 
        mapper.getTypeFactory().constructCollectionType(List.class, Integer.class));
    
    if (list == null || list.isEmpty() || list.get(0) == null) {
        return null;
    }
    
    Queue<TreeNode> queue = new LinkedList<>();
    TreeNode root = new TreeNode(list.get(0));
    queue.offer(root);
    
    int i = 1;
    while (!queue.isEmpty() && i < list.size()) {
        TreeNode current = queue.poll();
        
        // Process left child
        if (i < list.size() && list.get(i) != null) {
            current.left = new TreeNode(list.get(i));
            queue.offer(current.left);
        }
        i++;
        
        // Process right child
        if (i < list.size() && list.get(i) != null) {
            current.right = new TreeNode(list.get(i));
            queue.offer(current.right);
        }
        i++;
    }
    return root;
}`}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Graph Node Implementation</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    The Node class represents graph vertices with adjacency lists, commonly used in graph cloning problems:
                </p>
                <div className="overflow-x-auto">
                    <CodeBlock
                        language="java"
                        code={`@JsonIgnoreProperties(ignoreUnknown = true)
private static class Node {
    @JsonProperty
    public int val;
    @JsonProperty
    public List<Node> neighbors;
    
    public Node() {
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, List<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}

// Helper method: JSON adjacency list [[2,4],[1,3],[2,4],[1,3]] -> Node
private static Node buildNode(String jsonString, boolean isListType) 
    throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    List<List<Integer>> adjList = mapper.readValue(jsonString, 
        mapper.getTypeFactory().constructCollectionType(List.class, 
            mapper.getTypeFactory().constructCollectionType(List.class, Integer.class)));
    
    if (adjList == null || adjList.isEmpty()) return null;
    
    // Create all nodes first
    Map<Integer, Node> nodes = new HashMap<>();
    for (int i = 0; i < adjList.size(); i++) {
        nodes.put(i + 1, new Node(i + 1));
    }
    
    // Connect neighbors
    for (int i = 0; i < adjList.size(); i++) {
        Node node = nodes.get(i + 1);
        for (Integer neighborVal : adjList.get(i)) {
            node.neighbors.add(nodes.get(neighborVal));
        }
    }
    
    return nodes.get(1); // Return the first node
}

// Helper method: Node -> JSON adjacency list [[2,4],[1,3],[2,4],[1,3]]
private static String convertNodeToAdjacencyList(Node node) throws JsonProcessingException {
    if (node == null) return "null";
    
    Map<Integer, Node> visited = new HashMap<>();
    Queue<Node> queue = new LinkedList<>();
    
    queue.add(node);
    visited.put(node.val, node);
    
    // BFS to find all nodes
    while (!queue.isEmpty()) {
        Node curr = queue.poll();
        for(Node neighbor : curr.neighbors){
            if(!visited.containsKey(neighbor.val)){
                visited.put(neighbor.val, neighbor);
                queue.add(neighbor);
            }
        }
    }
    
    // Build adjacency list representation
    List<List<Integer>> adjList = new ArrayList<>();
    int maxVal = visited.keySet().stream().max(Integer::compare).orElse(0);
    for (int i = 0; i < maxVal; i++) {
        adjList.add(new ArrayList<>());
    }
    
    for(Node n : visited.values()){
        for(Node neighbor : n.neighbors){
            if (adjList.size() > n.val - 1) {
                adjList.get(n.val - 1).add(neighbor.val);
            }
        }
    }
    
    return new ObjectMapper().writeValueAsString(adjList);
}`}
                    />
                </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Complex Data Structure Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    The engine also handles collections of custom data structures:
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">List&lt;ListNode&gt; Support:</h4>
                        <div className="overflow-x-auto">
                            <CodeBlock
                                language="java"
                                code={`// JSON: [[1,4,5],[1,3,4],[2,6]]
// Converts to: List<ListNode> containing 3 linked lists

private static List<ListNode> buildListNodeList(String jsonString) 
    throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    if (jsonString.equals("[]")) {
        return new ArrayList<>();
    }
    
    List<List<Integer>> listOfLists = mapper.readValue(jsonString, 
        mapper.getTypeFactory().constructCollectionType(List.class, 
            mapper.getTypeFactory().constructCollectionType(List.class, Integer.class)));
    
    List<ListNode> result = new ArrayList<>();
    for (List<Integer> sublist : listOfLists) {
        if (sublist == null || sublist.isEmpty()) {
            result.add(null);
        } else {
            ListNode dummy = new ListNode(0);
            ListNode current = dummy;
            for (Integer val : sublist) {
                current.next = new ListNode(val);
                current = current.next;
            }
            result.add(dummy.next);
        }
    }
    return result;
}`}
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">TreeNode[] Array Support:</h4>
                        <div className="overflow-x-auto">
                            <CodeBlock
                                language="java"
                                code={`// JSON: [[3,9,20,null,null,15,7],[1,null,2]]
// Converts to: TreeNode[] array containing 2 trees

private static TreeNode[] buildTreeNodeArray(String jsonString) 
    throws JsonProcessingException {
    ObjectMapper mapper = new ObjectMapper();
    if (jsonString.equals("[]")) {
        return new TreeNode[0];
    }
    
    List<List<Integer>> listOfLists = mapper.readValue(jsonString, 
        mapper.getTypeFactory().constructCollectionType(List.class, 
            mapper.getTypeFactory().constructCollectionType(List.class, Integer.class)));
    
    TreeNode[] result = new TreeNode[listOfLists.size()];
    for (int i = 0; i < listOfLists.size(); i++) {
        List<Integer> treeValues = listOfLists.get(i);
        if (treeValues == null || treeValues.isEmpty() || 
            (treeValues.size() == 1 && treeValues.get(0) == null)) {
            result[i] = null;
        } else {
            result[i] = buildTreeFromList(treeValues);
        }
    }
    return result;
}`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Test Case Processing Flow</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    Here's how the engine processes test cases with custom data structures:
                </p>
                <div className="overflow-x-auto">
                    <CodeBlock
                        title="Test Case Processing"
                        language="java"
                        code={`// Example test case JSON from database:
{
    "input": {
        "list1": [1, 2, 4],
        "list2": [1, 3, 4]
    },
    "expectedOutput": [1, 1, 2, 3, 4, 4]
}

// Generated Main.java processing:
public static void main(String[] args) throws Exception {
    ObjectMapper mapper = new ObjectMapper();
    Solution solution = new Solution();
    
    String input = readAllInput();
    List<Map<String, Object>> testCases = 
        mapper.readValue(input, new TypeReference<List<Map<String, Object>>>() {});
    
    for (int i = 0; i < testCases.size(); i++) {
        try {
            Map<String, Object> testCase = testCases.get(i);
            Object inputData = testCase.get("input");
            
            // Parse custom data structure parameters
            ListNode list1 = buildListNode(
                mapper.writeValueAsString(((Map<String, Object>) inputData).get("list1")), 
                false
            );
            ListNode list2 = buildListNode(
                mapper.writeValueAsString(((Map<String, Object>) inputData).get("list2")), 
                false
            );
            
            // Execute user solution
            long startTime = System.nanoTime();
            ListNode result = solution.mergeTwoLists(list1, list2);
            long endTime = System.nanoTime();
            
            // Convert result back to JSON
            String resultJson = convertListNodeToJson(result);
            
            System.out.println("TESTCASE_START:" + i);
            System.out.println("RESULT:" + resultJson);
            System.out.println("TIME:" + (endTime - startTime) / 1_000_000);
            System.out.println("TESTCASE_END:" + i);
            
        } catch (Exception e) {
            System.out.println("ERROR:" + e.getClass().getSimpleName());
            System.out.println("MESSAGE:" + e.getMessage());
        }
    }
}`}
                    />
                </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Adding New Custom Data Structures</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    To add support for new data structures, extend the <code className="bg-code-bg px-1 sm:px-2 py-1 rounded text-xs sm:text-sm">CustomDataStructureGenerator</code>:
                </p>
                <div className="overflow-x-auto">
                    <CodeBlock
                        title="CustomDataStructureGenerator.java"
                        language="java"
                        code={`public class CustomDataStructureGenerator {
    
    public static String generateCustomStructureHelper(String structureName) {
        StringBuilder helper = new StringBuilder();
        
        switch (structureName) {
            case "ListNode":
                // ListNode implementation (existing)
                break;
            case "TreeNode":
                // TreeNode implementation (existing)
                break;
            case "Node":
                // Graph Node implementation (existing)
                break;
            case "TrieNode":
                // New: Add TrieNode support
                helper.append(generateTrieNodeHelper());
                break;
            case "Interval":
                // New: Add Interval support
                helper.append(generateIntervalHelper());
                break;
            default:
                throw new UnsupportedOperationException(
                    "Custom data structure not supported: " + structureName);
        }
        
        return helper.toString();
    }
    
    public static String generateCustomStructureClass(String structureName) {
        StringBuilder classDef = new StringBuilder();
        
        switch (structureName) {
            case "TrieNode":
                classDef.append("    private static class TrieNode {\n");
                classDef.append("        @JsonProperty\n");
                classDef.append("        TrieNode[] children = new TrieNode[26];\n");
                classDef.append("        @JsonProperty\n");
                classDef.append("        boolean isEnd = false;\n");
                classDef.append("        \n");
                classDef.append("        public TrieNode() {}\n");
                classDef.append("    }\n");
                break;
            case "Interval":
                classDef.append("    private static class Interval {\n");
                classDef.append("        @JsonProperty\n");
                classDef.append("        int start;\n");
                classDef.append("        @JsonProperty\n");
                classDef.append("        int end;\n");
                classDef.append("        \n");
                classDef.append("        public Interval() {}\n");
                classDef.append("        public Interval(int start, int end) {\n");
                classDef.append("            this.start = start;\n");
                classDef.append("            this.end = end;\n");
                classDef.append("        }\n");
                classDef.append("    }\n");
                break;
        }
        
        return classDef.toString();
    }
}`}
                    />
                </div>
            </div>
        </section>
    )
}

export default CustomDS;
