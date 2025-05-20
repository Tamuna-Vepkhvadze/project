import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const Country = () => {
  const { country } = useParams();
  const { data, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(`https://restcountries.com/v3.1/name/${country}`);
  }, []);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      Country
      <img src={data[0].flags.png} alt="" />
      <Link to="/">main</Link>
    </div>
  );
};
