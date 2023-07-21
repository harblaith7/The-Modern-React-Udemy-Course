import { useState } from "react";

export default function Modal() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="backdrop">
      <div className="modal">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button>Save</button>
        <button>Close</button>
      </div>
    </div>
  );
}
