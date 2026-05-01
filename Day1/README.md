# React Homework

---

## Question 1: Difference between Library and Framework

###  Answer
The key difference lies in **Inversion of Control**:

- **Library** → You control the flow, you call the library when needed  
- **Framework** → It controls the flow, and calls your code  

 **React is a library** because:
- It focuses only on the **view layer**
- Does not enforce full app structure

 **Framework example: Angular**
- Provides complete architecture  
- Controls application flow  

---

##  Question 2: Current Version of React

###  Answer
- Current version: **React 19**
- Example release: **19.2.5 (April 2026)**

###  Key Features
- Actions (form handling improvements)  
- `use()` hook for async handling  
- Improved Server Components  
- Better performance & reduced boilerplate  

---

##  Question 3: Folder Structure with Use Case

###  Recommended Structure
src/
│
├── assets/ # Images, SVGs, fonts
├── components/ # Reusable UI components
├── configs/ # App configuration & environment setup
├── hooks/ # Custom reusable hooks
├── context/ # Context API files (global state)
├── services/ # API calls & external services
├── utils/ # Helper functions
├── styles/ # CSS / styling files
│
├── App.jsx # Root component
└── main.jsx # Entry point


###  Basics
- **components/** → UI building blocks  
- **assets/** → static files  
- **styles/** → design & layout  

---

##  Question 4: Create React App vs Vite

| Feature | Create React App (CRA) | Vite |
|--------|-----------------------|------|
| Build Tool | Webpack | ES Modules + Rollup |
| Speed | Slower |  Very Fast |
| Startup | Slow | Instant |
| HMR | Slower | Fast Hot Reload |
| Modernity | Older |  Modern |

 **Conclusion:** Vite is preferred today.

---

##  Question 5: SPA vs MPA

###  Concepts

**Multi Page Application (MPA)**
- Loads a new page every time  
- Good for SEO  
- Example: E-commerce  

**Single Page Application (SPA)**
- No full page reload  
- Uses dynamic rendering (JSON data)  
- Better user experience  

---

###  Comparison

| Feature | SPA | MPA |
|--------|-----|-----|
| Page reload | No |  Yes |
| Routing | Client-side | Server-side |
| Initial load | Slower | Faster |
| Navigation | Faster | Slower |
| SEO | Hard (but possible) | Easy |
| UX | Smooth | Traditional |

---

##  Question 6: Reconciliation, Virtual DOM & Diffing Algorithm

###  Flow
Virtual DOM → Diffing → Reconciliation → Real DOM Update


###  Virtual DOM
- Lightweight copy of real DOM  
- Faster to manipulate  

###  Diffing Algorithm
- Compares old vs new Virtual DOM  
- Finds minimal changes  

###  Reconciliation
- Process of updating UI efficiently  
- Applies only necessary changes to real DOM  

---
