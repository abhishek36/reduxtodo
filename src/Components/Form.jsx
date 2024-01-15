import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, updateTodos } from "../features/todos/todoslice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      dispatch(
        updateTodos({
          _id: edit.todos._id,
          title,
          description,
        })
      );
    } else {
      dispatch(
        addTodos({
          title,
          description,
        })
      );
    }
    settitle("");
    setdescription("");
  };

  useEffect(() => {
    settitle(edit.todos.title);
    setdescription(edit.todos.description);
  }, [edit]);
  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      margin="auto"
      sx={{ maxWidth: { xs: "95%" } }}
    >
      <form onSubmit={handlesubmit}>
        <TextField
          variant="filled"
          label="title"
          fullWidth
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <TextField
          variant="filled"
          label="description"
          fullWidth
          sx={{ marginBlock: "20px" }}
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth>
          save todo
        </Button>
      </form>
    </Box>
  );
};

export default Form;
