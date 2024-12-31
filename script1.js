const ChildComponent = ({ count }) => {
    console.log("Child rendered!");
    return <div>Count: {count}</div>;
  };
  

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

/*In this case, every time the parent component re-renders (e.g., when the input value changes),
 the ChildComponent will also re-render, even if count remains unchanged.*/