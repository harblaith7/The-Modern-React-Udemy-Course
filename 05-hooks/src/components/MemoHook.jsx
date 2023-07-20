import { useState, useMemo } from "react";

export default function MemoHook() {
  const [text, setText] = useState("");
  const [person, setPerson] = useState("");

  const isPersonCoolFunc = () => {
    for (let i = 0; i < 1000000000; i++) {}
    if (person === "Laith") return "not cool";
    else if (person === "Shelby") return "very cool";
    else if (person === "Sam") return "moderately cool";
    else return "";
  };

  const isPersonCool = useMemo(isPersonCoolFunc, [person]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <button onClick={() => setPerson("Laith")}>Laith</button>
        <button onClick={() => setPerson("Shelby")}>Shelby</button>
        <button onClick={() => setPerson("Sam")}>Sam</button>
      </div>
      <p>{isPersonCool}</p>
    </div>
  );
}
