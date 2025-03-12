"use client";

import { useEffect } from "react";

interface Prop {
  reset: () => void;
}

const error = ({ reset }: Prop) => {
  useEffect(() => {
    reset();
  }, [error]);
  return (
    <div>
      <p>Something went wrong.</p>
      <button>Try Again</button>
    </div>
  );
};

export default error;
