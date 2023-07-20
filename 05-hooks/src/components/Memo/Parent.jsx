import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="text 1 (not used by Child)"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
      />
      <input
        type="text"
        placeholder="text 2 (used by Child)"
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />
      <Child prop={text2} />
    </div>
  );
}
