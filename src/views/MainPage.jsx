import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useDebaunce } from "../hooks/useDebaunce";
import styled from "styled-components";

const Title = styled.h1`
  text-decoration: none;
  color: red;
`;

export const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { data, loading, error, fetchData } = useFetch();
  const debauncedValue = useDebaunce(inputValue, 500);

  useEffect(() => {
    if (inputValue) {
      fetchData(`https://restcountries.com/v3.1/name/${debauncedValue}`);
    } else {
      fetchData("https://restcountries.com/v3.1/all");
    }
  }, [debauncedValue]);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  //

  return (
    <div>
      MainPage
      <nav>
        <Link to="/contact">second page</Link>
      </nav>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="search here"
      />
      {data?.map(({ name: { official } }) => (
        <Link to={`${official}`} key={official}>
          <div>
            <Title>{official}</Title>
            {/* <p>{official}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};
