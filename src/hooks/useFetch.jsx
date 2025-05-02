import React, { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async (url) => {
    try {
      const req = await fetch(url);
      const res = await req.json();
      setLoading(false);
      setData(res);
    } catch (error) {
      setError(error.message);
    }
  };

  return { data, loading, error, fetchData };
};
