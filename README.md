
---

# **JS Interview Questions**

### 1. **Difference between `null` and `undefined`**
- **`undefined`**: Default value for uninitialized variables.
- **`null`**: Explicitly set to indicate the absence of a value.

---

### 2. **Difference between Cookies, `sessionStorage`, and `localStorage`**
- **Cookies**: Small data for authentication, session management, and tracking.
- **`sessionStorage`**: Temporary storage for the session; lost when the window is closed.
- **`localStorage`**: Persistent storage with larger capacity; survives after closing the browser.

---

### 3. **How the Browser Renders a Website**
1. **DNS Lookup**: Resolves the URL to an IP address.
2. **HTTP Request**: Sends the request to the server.
3. **Receive HTTP Response**: Receives HTML, JavaScript, and other resources.
4. **Parse HTML**: Builds the DOM.
5. **Fetch External Resources**: Requests CSS, JS, images.
6. **Parse CSS**: Builds the CSSOM.
7. **Execute JS**: Modifies the DOM/CSSOM.
8. **Build Render Tree**: Combines the DOM and CSSOM.
9. **Layout**: Positions elements based on CSS.
10. **Painting**: Renders visual details.
11. **Compositing**: Layers are combined for the final page.

---

### 4. **Closures and Their Benefits**
- **Closure**: Inner function retains access to outer function variables.
- **Advantages**: Private variables, customized behavior, state management.
- **Disadvantages**: Memory consumption, potential bugs, performance issues.

---

### 5. **Event Delegation**
Event delegation involves adding a single event listener to a parent element rather than to individual child elements.

---

### 6. **Promises: Advantages and Disadvantages**
- **Advantages**: Avoid callback hell, chaining, error handling.
- **Disadvantages**: Verbose syntax, unhandled promise rejections.

---

### 7. **Service Workers**
Background scripts enabling offline caching, push notifications, and background sync.

---

### 8. **Same-Origin Policy**
Prevents web pages from accessing resources from different domains. Overcome using **CORS**.

---

### 9. **Critical CSS Implementation**
- Identify critical CSS and place it in the `<head>`.
- Defer non-critical CSS and JS to improve load time.

---

### 10. **Event Loop in JavaScript**
Handles asynchronous tasks:
1. **Heap**: Memory pool.
2. **Call Stack**: Stores function calls.
3. **Web APIs**: Handles async operations.
4. **Callback Queue**: Stores completed callback functions.
5. **Event Loop**: Pushes callbacks to the stack when the call stack is clear.

---

### 11. **State Management in SPAs**
- **Local State**: Managed within components.
- **Global Variables**: Store app-wide state.
- **Libraries**: Use Redux or Flux.
- **Pub/Sub**: Messaging pattern for decoupling components.

---

### 12. **Server-Side Rendering (SSR)**
Server generates the HTML page; useful for SEO, content-rich apps, and progressive web apps.

---

### 13. **Content Security Policy (CSP)**
Defines and enforces approved sources for resources, preventing XSS and code injection attacks.

---

### 14. **Tree Shaking**
Eliminates unused code from the final bundle to reduce size.

---

### 15. **Scopes in JavaScript**
Defines the context in which variables are accessible and their lifetime.

---

### 16. **Creating Custom Events in JavaScript**
Use `CustomEvent` constructor, `dispatchEvent` to trigger, and `addEventListener` to listen.

---

### 17. **Does `forEach()` Return a New Array?**
No, it returns `undefined`.

---

### 18. **Difference between `map()` and `forEach()`**
- **`map()`**: Returns a new array.
- **`forEach()`**: Returns `undefined`.

---

### 19. **What is Map in JavaScript?**
A collection of key-value pairs with additional features like key data type flexibility, insertion order preservation, and iteration support.

---

### 20. **What is Set in JavaScript?**
A collection of unique values, preserving insertion order, and without indexes.

---

### 21. **Handling Event Bubbling in JavaScript**
Event bubbling propagates from child to parent elements. Stop bubbling using `event.stopPropagation()`.

---

### 22. **Spread Operator in JavaScript**
Expands iterables (arrays/strings) into individual elements.

---

### 23. **`preventDefault()` in JavaScript**
Prevents the default behavior of an event (e.g., stopping a link from navigating).

---

### 24. **Difference between `Promise.all()` and `Promise.allSettled()`**
- **`Promise.all()`**: Rejects immediately if any promise fails.
- **`Promise.allSettled()`**: Waits for all promises to settle and returns the result.

---

### 25. **Difference between `Map` and `WeakMap`**
- **`Map`**: Keys can be any data type; preserves key order.
- **`WeakMap`**: Keys must be objects; allows garbage collection of keys.

---

### 26. **Garbage Collection in JavaScript**
Automatic memory management via algorithms like mark-and-sweep.

---

### 27. **Making an Object Immutable in JavaScript**
Use `Object.freeze()` to prevent modifications.

---

### 28. **Explicit Binding in JavaScript**
Set `this` explicitly using `call()`, `apply()`, or `bind()`.

---

### 29. **Labelled Statements in JavaScript**
Prefixing a statement with a label for use with `break` and `continue`.

---

### 30. **Difference between `defer` and `async` Attributes**
- **`defer`**: Waits for HTML to be parsed before executing the script in order.
- **`async`**: Executes script immediately after download, without maintaining order.

---

### 31. **How to Handle Errors in Promises**
- Reject the promise, use `.catch()`, or handle errors in `.then()`'s second argument.

---

### 32. **Is JavaScript Compiled or Interpreted?**
JavaScript is an interpreted language executed at runtime.

---

### 33. **Are References Copied in JavaScript?**
No, references to objects are not copied due to prototypes.

---

### 34. **Comma Operator in JavaScript**
Evaluates all operands from left to right and returns the value of the last operand.

---

### 35. **Nullish Coalescing Operator (??)**
Returns the right operand if the left one is `null` or `undefined`; otherwise, it returns the left operand.

---

### 36. **Difference between `appendChild()` and `insertBefore()`**
- **`appendChild()`**: Adds a child at the end.
- **`insertBefore()`**: Adds a child before a specified node.

---

### 37. **How to Measure the Dimensions of an Element?**
Use `getBoundingClientRect()` method.

---

### 38. **How to Get Dimensions of the Viewport?**
Use `window.innerWidth` and `window.innerHeight`.

---

