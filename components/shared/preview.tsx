import React from "react";

interface PreviewProps {
  Element: React.ReactElement;
}

const Preview: React.FC<PreviewProps> = ({ Element }) => {
  return <div className="p-2 border rounded-2xl">{Element}</div>;
};

export default Preview;
