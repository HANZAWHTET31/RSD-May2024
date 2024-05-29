import { useState, useEffect, useRef } from 'react';
import { Box, IconButton, List, OutlinedInput, InputAdornment, Alert } from "@mui/material";
import { List as ListIcon, Add as AddIcon } from "@mui/icons-material";
import Item from "./Item";

const api = "http://localhost:8181/todoList";

export default function App(){
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
	(async () => {
		try {
			const res = await fetch(api);
			if(res.ok){
				const data = await res.json();
				setData(data);
				setHasError(false);
			}else{
				setHasError(true);
			}
		} catch (e) {
			setHasError(true);
		}
	})()
  }, [])

  return (
	<Box>
		<h1>TODO-LIST</h1>
		<hr/>
		<Box sx={{ mx: "auto", maxWidth: "md", mt: 4}}>
			<form onSubmit={e => {
				e.preventDefault();
				const name = inputRef.current.value;
				if(!name){
					return false;
				}
			}}>
				<OutlinedInput 
					fullWidth
					inputRef={inputRef}
					endAdornment={
						<InputAdornment>
							<IconButton type="submit">
								<AddIcon />
							</IconButton>
						</InputAdornment>
					}/>
			</form>
			<List>
				{data.filter(item => !item.done).map(item => {
					return (
						<Item 
							key={item._id}
							item={item} />
					)
				})}
			</List>
			<hr/>
			<List>
				{data.filter(item => item.done).map(item => {
					return (
						<Item 
							key={item._id}
							item={item}/>
					)
				})}
			</List>
		</Box>
	</Box>
  );
}
