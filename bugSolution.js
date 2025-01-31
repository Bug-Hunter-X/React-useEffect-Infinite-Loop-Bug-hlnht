```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: The effect runs only once after the initial render
    console.log('Effect ran once');  
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```