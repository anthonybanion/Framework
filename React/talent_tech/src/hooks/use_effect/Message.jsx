// ==========================================
//
// Component that demonstrates the use of the useEffect hook.
//
// File: Message.jsx
// Author: Anthony Bañon
// Created: 2025-05-25
// Last Updated: 2025-05-25
// ==========================================

import React, { useEffect } from "react";
function Message() {
  useEffect(() => {
    console.log("The component has been mounted.");
    return () => {
      console.log("The component has been unmounted.");
    };
  }, []);

  return <h1>Hello, React!</h1>;
}

export default Message;

/*Behavior Explained

If you're using React.StrictMode in main.jsx or index.js, 
React intentionally mounts and unmounts the component 
twice during development to help you detect unwanted side effects.

React mounts the component → The component has been mounted.
React immediately unmounts for testing → The component has been unmounted.
React remounts it → The component has been mounted.*/
