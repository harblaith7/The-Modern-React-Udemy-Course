import { useState } from "react";

export default function Modal({ onClose: handleClose, onSave: handleSave }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");

  const saveGift = () => {
    if (name && value && image) {
      handleSave({ name, value, image });
    }
    setImage("");
    setName("");
    setValue("");
    handleClose();
  };

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
        <button onClick={saveGift}>Save</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
