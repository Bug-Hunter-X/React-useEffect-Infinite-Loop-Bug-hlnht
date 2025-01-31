# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by the `useEffect` hook.

## The Problem

The `bug.js` file contains a component that uses the `useEffect` hook to update its state. However, the dependency array for `useEffect` includes the state variable `count`.  This creates a circular dependency: every time the state updates, the effect runs again, causing another state update, and so on.

## The Solution

The `bugSolution.js` file corrects the issue. The dependency array is updated to an empty array `[]`, meaning the effect runs only once after the initial render. Alternatively, a different approach for state update could be implemented.