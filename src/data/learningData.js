export const learningQuestions = [
    {
        id: "1",
        title: "Two Sum",
        difficulty: "easy",
        topic: "Arrays",
        subtopic: "Hash Table",
        description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**
\`\`\`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [3,2,4], target = 6
Output: [1,2]
\`\`\`

**Constraints:**
- 2 ? nums.length ? 10?
- -10? ? nums[i] ? 10?
- -10? ? target ? 10?
- Only one valid answer exists.`,
        hints: [
            "A brute force approach would be to check every pair of numbers ? but can you do better?",
            "Think about what value you need to find for each element. If you're at nums[i], you need target - nums[i].",
            "Use a hash map to store values you've seen. For each element, check if target - nums[i] exists in the map.",
        ],
        solution: `**Approach: Hash Map (One Pass)**

Use a hash map to store each number's index as you iterate. For each element, check if the complement (target - current) already exists in the map.

\`\`\`python
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
\`\`\`

**Time Complexity:** O(n)
**Space Complexity:** O(n)

The key insight is that a hash map allows O(1) lookups, turning the naive O(n?) approach into O(n).`,
        variants: [
            "What if the array is sorted? (Use two pointers instead)",
            "What if you need to return all pairs that sum to target?",
            "Three Sum: Find all unique triplets that sum to zero.",
        ],
        preparationAdvice: `This is one of the most frequently asked questions. Focus on:
- Explaining the brute force first, then optimizing
- Clearly articulating why a hash map helps
- Handling edge cases (duplicates, negative numbers)
- Being able to code it cleanly in under 5 minutes`,
        companies: [
            { name: "Google", round: "Phone Screen", role: "SWE", year: 2025, frequency: 42 },
            { name: "Amazon", round: "Online Assessment", role: "SDE", year: 2025, frequency: 38 },
            { name: "Meta", round: "Phone Screen", role: "SWE", year: 2024, frequency: 25 },
        ],
    },
    {
        id: "2",
        title: "LRU Cache",
        difficulty: "hard",
        topic: "Design",
        subtopic: "Data Structures",
        description: `Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the \`LRUCache\` class:
- \`LRUCache(int capacity)\` Initialize the LRU cache with positive size capacity.
- \`int get(int key)\` Return the value of the key if it exists, otherwise return -1.
- \`void put(int key, int value)\` Update the value of the key if it exists. Otherwise, add the key-value pair. If the number of keys exceeds capacity, evict the least recently used key.

The functions \`get\` and \`put\` must each run in **O(1)** average time complexity.

**Example:**
\`\`\`
Input: ["LRUCache","put","put","get","put","get","put","get","get","get"]
       [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
Output: [null,null,null,1,null,-1,null,-1,3,4]
\`\`\``,
        hints: [
            "Think about which data structures give O(1) access ? hash maps do.",
            "You also need to track ordering of access. A linked list can maintain insertion/access order.",
            "Combine a hash map with a doubly linked list. The map gives O(1) lookups, and the list gives O(1) reordering.",
        ],
        solution: `**Approach: Hash Map + Doubly Linked List**

Maintain a doubly linked list where the head is the most recently used and the tail is the least recently used. A hash map maps keys to their corresponding list nodes.

\`\`\`python
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = {}
        self.head, self.tail = Node(), Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _insert(self, node):
        node.prev, node.next = self.tail.prev, self.tail
        self.tail.prev.next = self.tail.prev = node

    def get(self, key):
        if key in self.cache:
            self._remove(self.cache[key])
            self._insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self.cache[key] = node
        self._insert(node)
        if len(self.cache) > self.cap:
            lru = self.head.next
            self._remove(lru)
            del self.cache[lru.key]
\`\`\`

**Time Complexity:** O(1) for both get and put
**Space Complexity:** O(capacity)`,
        variants: [
            "Implement an LFU (Least Frequently Used) Cache",
            "Add a TTL (time-to-live) expiration to cache entries",
            "Make the cache thread-safe",
        ],
        preparationAdvice: `This is a classic system design + coding hybrid question. Key points:
- Draw the doubly linked list structure before coding
- Explain sentinel nodes (dummy head/tail) to simplify edge cases
- Practice the remove and insert helper methods until they're automatic
- Be prepared to discuss trade-offs with other eviction policies`,
        companies: [
            { name: "Meta", round: "Onsite", role: "SWE", year: 2025, frequency: 35 },
            { name: "Microsoft", round: "Onsite", role: "SDE II", year: 2025, frequency: 28 },
            { name: "Amazon", round: "Onsite", role: "SDE", year: 2024, frequency: 22 },
        ],
    },
];
export const recommendationReasons = {
    weak_topic: "This topic was identified as a weak area based on your recent performance.",
    marked_for_review: "You previously marked this question for review.",
    difficulty_progression: "Progressing difficulty based on your comfort in this topic.",
    fresh_pool: "A new question to expand your coverage across topics.",
};
