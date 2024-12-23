import React, { useState } from "react";

const CharacterCounter = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const countCharacters = () => {
    const cleanString = input.replace(/\s+/g, "").toUpperCase();
    const charCounts = {};
    const output = [];

    for (const char of cleanString) {
      if (!charCounts[char]) {
        charCounts[char] = cleanString.split(char).length - 1;
        output.push(`${char}-${charCounts[char]}`);
      }
    }

    setResult(output);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Character Counter</h1>
      <textarea
        value={input}
        onChange={handleInputChange}
        rows={4}
        cols={50}
        placeholder="Enter your string here..."
        style={{ marginBottom: "10px", display: "block" }}
      />
      <button onClick={countCharacters} style={{ marginBottom: "10px" }}>
        Count Characters
      </button>
      <div>
        <h3>Result:</h3>
        {result.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default CharacterCounter;
