class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

function isBalanced(brackets) {
  if (typeof brackets !== 'string' || brackets.length === 0) {
    throw new Error("Input must be a non-empty string.");
  }

  let stack = new Stack();
  let bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of brackets) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      if (stack.isEmpty() || stack.pop() !== bracketMap[char]) {
        return false;
      }
    } else {
      throw new Error("Input contains invalid characters.");
    }
  }

  return stack.isEmpty();
}

// Example usage
try {
  console.log(isBalanced("{[()]}")); // true
  console.log(isBalanced("{[(])}")); // false
  console.log(isBalanced("{{[[(())]]}}")); // true
  console.log(isBalanced("Invalid{]Input")); // throws Error
} catch (e) {
  console.error(e.message);
}
