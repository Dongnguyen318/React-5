import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Task({ data }) {
  const [content, setContent] = useState("");
  useEffect(() => {
    setContent(data.content);
  }, []);

  const handleChange = (e) => {
    setContent(e.value);
  };
  return (
    <div className="task">
      <input
        type="text"
        className="task-name"
        value={content}
        onChange={handleChange}
      />
    </div>
  );
}
