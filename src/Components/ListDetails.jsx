import React from "react";
import {
  Button,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodos,
  editFromState,
  fetchTodos,
  removeFromState,
} from "../features/todos/todoslice";

const ListDetails = ({ todos }) => {
  const { isSuccess } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleremove = (id) => {
    dispatch(deleteTodos(id));
    if (isSuccess) {
      dispatch(removeFromState(id));
    }
  };
  const handleedit = (todos) => {
    dispatch(editFromState(todos));
  };
  return (
    <>
      <ListItem disablePadding sx={{ marginBlock: "20px" }}>
        <ListItemButton
          sx={{ backgroundColor: "teal", alignItems: "flex-end" }}
        >
          <ListItemText>
            <Typography fontWeight={500}>{todos.title}</Typography>
            <Typography>{todos.description}</Typography>
          </ListItemText>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="warning"
              onClick={() => handleedit(todos)}
            >
              <EditIcon />
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleremove(todos._id)}
            >
              <DeleteIcon />
            </Button>
          </Stack>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ListDetails;
