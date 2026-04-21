//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) => count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
/*
The issue is that the effect depends on `count` and is also trying to update it. This causes an infinite loop.
Passing an empty dependency array avoids this, making the effect only happen on mount. Also, using a function
in the setter is safer because React will keep track of the current state of `count` and use the latest value.
*/
