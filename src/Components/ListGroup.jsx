import React, { useEffect } from "react";
import { Box, LinearProgress, List, Typography } from "@mui/material";
import ListItem from "./ListDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todos/todoslice";

const ListGroup = () => {
  const { alltodos, isLoading, isError } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  if (isLoading) {
    return (
      <LinearProgress
        color="warning"
        sx={{ backgroundColor: "gray", marginBlock: "20px" }}
      ></LinearProgress>
    );
  }
  if (alltodos.length === 0) {
    return (
      <Typography variant="h6" textAlign="center" sx={{ marginBlock: "20px" }}>
        no todos yet
      </Typography>
    );
  }
  if (isError) {
    return (
      <Typography variant="h6" textAlign="center">
        something went wrong
      </Typography>
    );
  }
  return (
    <Box
      maxWidth={500}
      margin="auto"
      sx={{ maxWidth: { xs: "95%" }, marginTop: "30px" }}
    >
      <List>
        {alltodos.map((todos) => (
          <ListItem key={todos._id} todos={todos} />
        ))}
      </List>
    </Box>
  );
};

export default ListGroup;
