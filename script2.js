const ChildComponent = React.memo(({ count }) => {
    console.log("Child rendered!");
    return <div>Count: {count}</div>;
  });
  
  const ParentComponent = () => {
    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState("");
  
    return (
      <div>
        <ChildComponent count={count} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    );
  };

  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ParentComponent/>);

  /*
  ChildComponent will only re-render if the count prop changes, improving performance.

  =>When to Use React.memo:
        ->Use React.memo for components that receive props and are expensive to re-render.
        ->Avoid overusing it on lightweight components, as memoization has its own overhead.
   */
  