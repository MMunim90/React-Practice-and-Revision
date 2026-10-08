import React, { useEffect, useRef, useState } from "react";
import Count from "./Count";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  //   const [renderCount, setRenderCount] = useState(0);

  const renderCount = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current = renderCount.current + 1;
  });

  console.log(renderCount.current);

  // console.log(counter, "Counter from counter components");

  // three ways to write useEffect
  // 1. useEffect(() => {.....});
  // 2. useEffect(() => {.....}, []);
  // 3. useEffect(() => {.....}, [count]);

  useEffect(() => {
    document.title = `Counter ${counter}`;
    localStorage.setItem("useEffect", "useEffect Triggered!!!");
    // console.log("console from useEffect");
    // console.log(window.innerWidth);

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, [counter]);
  // console.log("console from outside");

  useEffect(() => {
    // console.log("Use effect with empty dependency array");
  }, []);

  const counterHandler = () => {
    setCounter((prevCounter) => prevCounter + 1); // updater function
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // console.log(counter, "Counter");
  };
  // console.log(counter, "Counter");

  const handleBtnClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus()
  }

  return (
    <div className="counter">
      <h2>{renderCount.current}</h2>
      <Count counter={counter} setCounter={setCounter} />
      <button onClick={() => counterHandler()} className="increment-btn">
        Increment
      </button>

      <h3>Monitor Width: {width}</h3>
      <h3>Monitor height: {height}</h3>

      <input ref={inputRef} type="text" />
      <button onClick={handleBtnClick}>Click</button>
    </div>
  );
};

export default Counter;
