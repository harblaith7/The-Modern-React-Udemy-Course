import { useState, useRef } from "react";

export default function MagicNumber() {
  const magicNumber = 5;
  const secondMagicNumber = 10;
  console.log("The component is rerendering");
  const [messages, setMessages] = useState({
    p: "",
    button: "Click me until you reached the magic number",
  });
  const count = useRef(0);

  const handleClick = () => {
    count.current = count.current + 1;
    if (count.current === magicNumber) {
      setMessages({
        p: "You reached it!",
        button: "Click me until you reach the second Magic number",
      });
    } else if (count.current === secondMagicNumber) {
      setMessages({
        p: "You reached it again!",
        button: "Stop clicking me",
      });
    }
  };

  return (
    <div>
      {messages.p && <p>{messages.p}</p>}
      <button onClick={handleClick}>{messages.button}</button>
    </div>
  );
}
