import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

const CodePractice = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("javascript");

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const getExtensions = () => {
    switch (language) {
      case "python":
        return [python()];
      default:
        return [javascript()];
    }
  };

  return (
    <div>
      <h2>Practice Coding</h2>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="javascript">JavaScript/React</option>
        <option value="python">Python</option>
      </select>
      <CodeMirror value={code} onChange={(value) => setCode(value)} extensions={getExtensions()} />
      <button onClick={runCode}>Run Code</button>
    </div>
  );
};

export default CodePractice;
