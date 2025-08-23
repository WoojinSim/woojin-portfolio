import { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
    </div>
  );
};

export default Test;
