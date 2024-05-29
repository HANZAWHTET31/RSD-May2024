import { ListItem, ListItemText, ListItemButton, IconButton, Typography } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
export default function Item({item}){
      return (
            <ListItem>
                  <ListItemText primary={item.name} />
                  <IconButton>
                        <DeleteIcon color="error" />
                  </IconButton>
            </ListItem>
      )
}