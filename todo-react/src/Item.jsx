import { ListItem, ListItemText, IconButton } from "@mui/material";
import { CheckBox as DoneIcon, SquareOutlined as CheckBoxIcon, Delete as DeleteIcon } from "@mui/icons-material";

export default function Item({item, toggle, remove}){
      return (
            <ListItem>
                  {item.done ? (
                        <IconButton onClick={() => {toggle(item._id)}}>
                              <DoneIcon color="success" />
                        </IconButton>
                  ):(
                        <IconButton onClick={() => {toggle(item._id)}}>
                              <CheckBoxIcon />
                        </IconButton>
                  )}
                  <ListItemText primary={item.name} />
                  <IconButton onClick={() => {remove(item._id)}}>
                        <DeleteIcon color="error" />
                  </IconButton>
            </ListItem>
      )
}