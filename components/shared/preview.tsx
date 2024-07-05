import React from "react";

interface PreviewProps {
  Element: React.ReactElement;
}

const Preview: React.FC<PreviewProps> = ({ Element }) => {
  return <div className="p-2">{Element}</div>;
};

export default Preview;
