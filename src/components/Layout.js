import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block ${className}`}>{children}</div>
  );
};

export default Layout;
