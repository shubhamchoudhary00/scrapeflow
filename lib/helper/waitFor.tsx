import React from "react";

const waitFor = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default waitFor;
