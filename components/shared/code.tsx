"use client";

import React from "react";
import CodeMirror from "@uiw/react-codemirror";

import { githubDark } from "@uiw/codemirror-theme-github";

interface CodeProps {
  code: string;
}

const Code: React.FC<CodeProps> = ({ code }) => {
  return (
    <CodeMirror
      value={code}
      theme={githubDark}
      editable={false}
      lang="typescript"
    />
  );
};

export default Code;
