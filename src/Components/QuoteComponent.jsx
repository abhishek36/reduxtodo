import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../features/quotes/quoteSlice";

const QuoteComponent = () => {
  const { isLoading, isError, quoteData } = useSelector(
    (state) => state.quotes
  );
  console.log(quoteData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, []);
  
  if (isLoading) {
    return (
      <Typography textAlign="center" variant="h6" my={2}>
        quote data loading...
      </Typography>
    );
  }

  if (isError) {
    return (
      <Typography textAlign="center" color="error" variant="h6" my={2}>
        something went wrong...
      </Typography>
    );
  }

  return (
    <Typography textAlign="center" variant="h6" my={2}>
      {quoteData.content + " -" + quoteData.author}
    </Typography>
  );
};

export default QuoteComponent;
