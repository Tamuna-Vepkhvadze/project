import React, { useEffect, useState } from "react";

export const useDebaunce = (value, delay) => {
  const [debauncedValue, setDebauncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebauncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debauncedValue;
};
