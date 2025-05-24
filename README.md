# Here's a **deep dive into JavaScript Arrays**, including **in-built methods**, **array tricks**, and **useful patterns** — ideal for interviews and real-world coding.

---

## 🔹 **1. JavaScript Arrays Overview**

- Arrays are ordered, mutable collections.
- Can hold mixed data types: numbers, strings, objects, other arrays, etc.
- Zero-indexed.

```
js
CopyEdit
let arr = [1, 'hello', { a: 1 }, [2, 3]];

```

---

## 🔹 **2. In-Built Array Methods**

### 🔸 **Mutating Methods**

Change the original array.

| Method | Description |
| --- | --- |
| `push(el)` | Adds to end, returns new length |
| `pop()` | Removes last item, returns it |
| `unshift(el)` | Adds to start |
| `shift()` | Removes first item |
| `splice(start, deleteCount, ...items)` | Insert/remove at any index |
| `reverse()` | Reverses array in place |
| `sort(compareFn)` | Sorts array (default lexicographically) |
| `fill(value, start, end)` | Fills elements with `value` |
| `copyWithin(target, start, end)` | Copies part of array in-place |
| `flat(depth)` | Flattens nested arrays |

### 🔸 Example:

```
js
CopyEdit
let a = [1, 2, 3];
a.splice(1, 1, 99); // [1, 99, 3]
a.reverse();        // [3, 99, 1]

```

---

### 🔸 **Non-Mutating Methods**

Return new arrays or values.

| Method | Description |
| --- | --- |
| `concat(arr2)` | Joins arrays |
| `slice(start, end)` | Returns sub-array |
| `map(fn)` | Transforms each element |
| `filter(fn)` | Filters based on condition |
| `reduce(fn, acc)` | Reduces to single value |
| `forEach(fn)` | Iterates (no return) |
| `find(fn)` | Returns first match |
| `findIndex(fn)` | Returns index of first match |
| `some(fn)` | Checks if any element satisfies condition |
| `every(fn)` | Checks if all satisfy condition |
| `includes(el)` | Checks for existence |
| `indexOf(el)` | Returns first index of `el` or -1 |
| `lastIndexOf(el)` | Returns last index of `el` or -1 |
| `join(sep)` | Converts to string with separator |
| `toString()` | Converts to comma-separated string |
| `at(index)` | Gets element by index (supports negative) |
| `entries()` | Returns iterator of [index, value] pairs |
| `keys()` | Returns iterator of indexes |
| `values()` | Returns iterator of values |
| `toReversed()` | New ES2023: non-mutating version of `reverse()` |

### 🔸 Example:

```
js
CopyEdit
let a = [1, 2, 3];
let b = a.map(x => x * 2); // [2, 4, 6]
let c = a.filter(x => x > 1); // [2, 3]

```

---

## 🔹 **3. Array Tricks & Tips**

### ✅ Clone Arrays

```
js
CopyEdit
let a = [1, 2];
let b = [...a];
let c = a.slice();
let d = Array.from(a);

```

### ✅ Flatten Array

```
js
CopyEdit
let nested = [1, [2, [3]]];
nested.flat(2); // [1, 2, 3]

```

### ✅ Remove Duplicates

```
js
CopyEdit
let arr = [1, 2, 2, 3];
let unique = [...new Set(arr)];

```

### ✅ Sum of Array

```
js
CopyEdit
let arr = [1, 2, 3];
let sum = arr.reduce((acc, val) => acc + val, 0);

```

### ✅ Shuffle Array (Fisher-Yates)

```
js
CopyEdit
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

```

### ✅ Chunk Array

```
js
CopyEdit
function chunk(arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

```

### ✅ Group By Property

```
js
CopyEdit
function groupBy(arr, prop) {
  return arr.reduce((acc, obj) => {
    let key = obj[prop];
    acc[key] = acc[key] || [];
    acc[key].push(obj);
    return acc;
  }, {});
}

```

### ✅ Intersection of Arrays

```
js
CopyEdit
let a = [1, 2, 3], b = [2, 3, 4];
let intersect = a.filter(x => b.includes(x)); // [2, 3]

```

### ✅ Difference of Arrays

```
js
CopyEdit
let diff = a.filter(x => !b.includes(x)); // [1]

```

### ✅ Flatten + Map (flatMap)

```
js
CopyEdit
let result = [1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

```

---

## 🔹 **4. Useful ES2023+ Array Additions**

| Method | Description |
| --- | --- |
| `toSorted()` | Like `sort()`, but doesn't mutate |
| `toReversed()` | Like `reverse()`, but non-mutating |
| `toSpliced()` | Like `splice()`, returns new array |
| `with(index, val)` | Immutable update at index |
| `findLast(fn)` | Last matching element |
| `findLastIndex(fn)` | Last matching index |

```
js
CopyEdit
let arr = [3, 1, 4];
arr.toSorted();        // [1, 3, 4] (original not changed)
arr.with(1, 9);        // [3, 9, 4]

```

---

## 🔹 **5. Performance Tips**

| Task | Best Approach |
| --- | --- |
| Fast lookup | Use `Set` or `Map` |
| Avoid mutating originals | Use `slice()`, `spread`, etc. |
| Performance-critical loops | Use `for` loop instead of `map()` |

---

## 🔹 **6. Common Interview Patterns**

| Pattern | Example |
| --- | --- |
| Frequency counter | `count[el] = (count[el] |
| Two pointers | Sorted arrays, remove duplicates |
| Sliding window | Subarray problems (e.g., max sum, min len) |
| Hashing + Arrays | Group anagrams, longest sequence, etc. |

# SET, MAP, Object (Hash)

- Core concepts
- Key methods
- Time & space complexity
- Common DSA problems

---

### 🔹 1. `Set` in JavaScript

A `Set` is a collection of **unique** values (no duplicates).

### ✅ Syntax

```

const mySet = new Set();

```

### ✅ Common Methods

| Method | Description | Time Complexity |
| --- | --- | --- |
| `add(value)` | Adds a new element | O(1) |
| `delete(value)` | Removes the element | O(1) |
| `has(value)` | Checks existence | O(1) |
| `clear()` | Removes all elements | O(n) |
| `size` | Returns number of elements | O(1) |
| `forEach(callback)` | Iterates over elements | O(n) |

### ✅ Use Cases

- Removing duplicates
- Checking presence efficiently
- Fast insert/delete/lookup

### ✅ Example

```

const set = new Set([1, 2, 2, 3]);
set.add(4);
set.has(2); // true
set.delete(3);
console.log([...set]); // [1, 2, 4]

```

---

### 🔹 2. `Map` in JavaScript

A `Map` is a key-value store that maintains the **insertion order** and allows **any type of key**.

### ✅ Syntax

```

const myMap = new Map();

```

### ✅ Common Methods

| Method | Description | Time Complexity |
| --- | --- | --- |
| `set(key, value)` | Adds/updates a value | O(1) |
| `get(key)` | Returns the value | O(1) |
| `has(key)` | Checks existence | O(1) |
| `delete(key)` | Removes entry | O(1) |
| `clear()` | Removes all entries | O(n) |
| `size` | Number of key-value pairs | O(1) |
| `forEach(callback)` | Iterates over entries | O(n) |

### ✅ Use Cases

- Frequency counters
- Adjacency lists
- Hash maps with non-string keys

### ✅ Example

```

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.get('a'); // 1
map.has('b'); // true
map.delete('a');

```

---

### 🔹 3. `Object` in JavaScript

Objects are key-value pairs, best suited for **string/symbol keys**.

### ✅ Syntax

```

const obj = {};

```

### ✅ Operations

| Operation | Description | Time Complexity |
| --- | --- | --- |
| `obj[key] = value` | Add or update value | O(1) |
| `delete obj[key]` | Delete property | O(1) |
| `key in obj` | Check existence | O(1) |
| `Object.keys(obj)` | Get keys | O(n) |
| `Object.values(obj)` | Get values | O(n) |
| `Object.entries(obj)` | Get [key, value] pairs | O(n) |

### ✅ Use Cases

- Simple key-value data
- JSON responses
- The default DSA maps when non-ordered keys are fine

---

### 🔹 Set vs Map vs Object

| Feature | Set | Map | Object |
| --- | --- | --- | --- |
| Stores | Unique values | Key-value pairs | Key-value pairs |
| Key type | N/A | Any (including objects) | String/symbol only |
| Maintains order | Yes | Yes | No (pre-ES6: unordered) |
| Iteration | `for...of`, `forEach` | `forEach`, `for...of` | `for...in`, `Object.*()` |

---

### 🔹 DSA Top Problems (Using Set/Map/Object)

### 1. ✅ Two Sum (Leetcode #1)

```
Given an array of integers nums and an integer target, return the indices of the two numbers in the array that add up to the target.
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}

```

⏱️ TC: O(n), 🧠 SC: O(n)

---

### 2. ✅ Contains Duplicate (Leetcode #217)

```
Given an array of integers nums, return true if any value appears at least twice in the array, and false if every element is distinct.
function containsDuplicate(nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
}

```

⏱️ TC: O(n), 🧠 SC: O(n)

---

### 3. ✅ Group Anagrams (Leetcode #49)

```
Given an array of strings strs, group the anagrams together. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. You can return the answer in any order.
function groupAnagrams(strs) {
  const map = new Map();
  for (let str of strs) {
    const key = str.split('').sort().join('');
    map.set(key, [...(map.get(key) || []), str]);
  }
  return [...map.values()];
}

```

⏱️ TC: O(n * k log k), 🧠 SC: O(n)

---

### 4. ✅ Longest Consecutive Sequence (Leetcode #128)

```
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
The algorithm must run in O(n) time.
A consecutive sequence means numbers follow each other in order without gaps (e.g., [1, 2, 3] is valid, but [1, 3] is not).
function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxLen = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let length = 1;
      while (set.has(num + length)) length++;
      maxLen = Math.max(maxLen, length);
    }  }

  return maxLen;
}

```

⏱️ TC: O(n), 🧠 SC: O(n)

---

### 5. ✅ First Unique Character (Leetcode #387)

```
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
function firstUniqChar(s) {
  const freq = new Map();
  for (let char of s) freq.set(char, (freq.get(char) || 0) + 1);

  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) return i;
  }
  return -1;
}

```

⏱️ TC: O(n), 🧠 SC: O(1) (since only 26 lowercase letters)

---

### ✅ Summary Table: Time & Space

| Operation | Set | Map | Object |
| --- | --- | --- | --- |
| Insert | O(1) | O(1) | O(1) |
| Delete | O(1) | O(1) | O(1) |
| Search | O(1) | O(1) | O(1) |
| Iterate | O(n) | O(n) | O(n) |
| Space | O(n) | O(n) | O(n) |

### **1. What is a Prefix Sum?**

A **prefix sum** (or cumulative sum) is a technique where you precompute an array such that each element at index **`i`** represents the sum of all elements in the original array from the start up to index **`i`**.

### **Prefix Sum Basics**

**Definition**:

- An array where each element at index **`i`** is the sum of all elements in the original array from index **`0`** to **`i`**.
- **Example**:
    - Original array: **`[3, 1, 2, 5, 4]`**
    - Prefix sum: **`[3, 4, 6, 11, 15]`**

**Construction**:

- **Time**: O(n), **Space**: O(n)
- **Formula**:CopyDownload
    
    python
    
    ```
    prefix[0] = arr[0]
    prefix[i] = prefix[i-1] + arr[i]
    ```
    
- **With Dummy Zero** (1-based indexing):CopyDownload
    
    python
    
    ```
    prefix = [0]
    for num in arr:
        prefix.append(prefix[-1] + num)
    ```
    

**Range Sum Query**:

- Sum from index **`i`** to **`j`** (0-based):CopyDownload
    
    python
    
    ```
    sum(i, j) = prefix[j+1] - prefix[i]
    ```
    

---

### **2. Key Applications**

### **1. Range Sum Queries**

- **Problem**: Answer multiple sum queries on a static array.
- **Solution**: Precompute the prefix sum array for O(1) per query.

### **2. Subarray Sum Equals Target (LeetCode 560)**

- **Goal**: Count subarrays with sum **`k`**.
- **Approach**: Track prefix sums in a hash map.CopyDownload
    
    python
    
    ```
    def subarraySum(nums, k):
        count = 0
        sum_map = {0: 1}# Key: prefix_sum, Value: frequency
        current_sum = 0
        for num in nums:
            current_sum += num
            count += sum_map.get(current_sum - k, 0)
            sum_map[current_sum] = sum_map.get(current_sum, 0) + 1
        return count
    ```
    

### **3. Equilibrium Index**

- **Goal**: Find index where left sum = right sum.
- **Solution**:CopyDownload
    
    python
    
    ```
    total = sum(arr)
    left_sum = 0
    for i, num in enumerate(arr):
        if left_sum == (total - left_sum - num):
            return i
        left_sum += num
    return -1
    ```
    

### **4. Maximum Subarray Sum (Kadane’s Algorithm)**

- **Not Directly Prefix Sum**, but track cumulative sums:CopyDownload
    
    python
    
    ```
    max_sum = current_sum = arr[0]
    for num in arr[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum
    ```
    

### **5. Circular Array Maximum Subarray**

- **Trick**: Compare the maximum subarray in the linear array vs. the total sum minus the minimum subarray.

---

### **3. Difference Array (Range Updates)**

**Use Case**: Efficiently apply range updates (e.g., add **`x`** to all elements from **`i`** to **`j`**).

**Steps**:

1. Initialize **`diff`** array:CopyDownload
    
    python
    
    ```
    diff[0] = arr[0]
    for i in range(1, n):
        diff[i] = arr[i] - arr[i-1]
    ```
    
2. **Range Update**:CopyDownload
    
    python
    
    ```
    diff[i] += x
    if j+1 < n: diff[j+1] -= x
    ```
    
3. Reconstruct the final array using prefix sums on **`diff`**.

**Example**:

- Original: **`[1, 2, 3, 4]`**, add 2 to indices 1-2:
    - **`diff`** after update: **`[1, 2+2=4, 3-2=1, 4]`**
    - Reconstructed array: **`[1, 5, 6, 4]`**

---

### **4. 2D Prefix Sum (Matrix Submatrix Queries)**

**Construction**:

- For matrix **`mat`** of size **`m x n`**:CopyDownload
    
    python
    
    ```
    prefix = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            prefix[i][j] = mat[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1]
    ```
    

**Submatrix Sum Query**:

- Sum of submatrix from **`(x1, y1)`** to **`(x2, y2)`**:CopyDownload
    
    python
    
    ```
    sum = prefix[x2+1][y2+1] - prefix[x1][y2+1] - prefix[x2+1][y1] + prefix[x1][y1]
    ```
    

**Example**:

- Matrix:CopyDownload
    
    python
    
    ```
    [[1, 2],
     [3, 4]]
    ```
    
- Prefix:CopyDownload
    
    python
    
    ```
    [[0, 0, 0],
     [0, 1, 3],
     [0, 4, 10]]
    ```
    
- Sum of **`(0,0)`** to **`(1,1)`**: **`10 - 0 - 0 + 0 = 10`**.

---

### **5. Advanced Techniques**

### **1. Sliding Window + Prefix Sum**

- **Problem**: Find the smallest window with sum ≥ **`k`**.CopyDownload
    
    python
    
    ```
    left = 0
    min_len = infinity
    for right in range(n):
        current_sum += arr[right]
        while current_sum >= k:
            min_len = min(min_len, right - left + 1)
            current_sum -= arr[left]
            left += 1
    ```
    

### **2. Prefix Sum with Modulo (LeetCode 523)**

- **Goal**: Check if a subarray exists with sum divisible by **`k`**.
- **Approach**: Track remainders of prefix sums modulo **`k`**.

### **3. Binary Search on Prefix Sum (LeetCode 209)**

- **Problem**: Shortest subarray with sum ≥ **`k`**.
- **Approach**: Use binary search on a sorted list of prefix sums.

---

### **6. Common Pitfalls**

1. **Off-by-One Errors**: Verify indices in 1-based vs. 0-based prefix arrays.
2. **Negative Prefix Sums**: Use hash maps carefully (e.g., subarray sum problems).
3. **Overflow**: Use **`long`** or **`BigInt`** for large numbers.

---

### **7. Practice Problems**

| **Difficulty** | **Problem** | **Key Technique** |
| --- | --- | --- |
| **Easy** | [303. Range Sum Query](https://leetcode.com/problems/range-sum-query-immutable/) | Basic prefix sum |
| **Medium** | [560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/) | Hash map + prefix sum |
| **Medium** | [304. 2D Range Sum](https://leetcode.com/problems/range-sum-query-2d-immutable/) | 2D prefix sum |
| **Hard** | [689. Max Sum of 3 Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/) | Prefix sum + sliding window |

---

**Key Takeaway**:

The prefix sum technique is a **swiss-army knife** for optimizing range-based operations. Master its variants (1D/2D, difference arrays) and combine with hash maps, binary search, or sliding window for powerful solutions. 🚀
