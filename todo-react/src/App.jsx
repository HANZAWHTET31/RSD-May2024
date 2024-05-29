import { useState, useEffect, useRef } from 'react'
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
	<div>
		<h1>TODO-LIST</h1>
		<hr/>
		<form onSubmit={e => {
			e.preventDefault();
			const name = inputRef.current.value;
			if(!name){
				return false;
			}
		}}>
			<input type="text" ref={inputRef} />
			<input type="submit" />
		</form>
		<ul>
			{data.filter(item => !item.done).map(item => {
				return (
					<Item 
						key={item._id}
						item={item} />
				)
			})}
		</ul>
		<hr/>
		<ul>
			{data.filter(item => item.done).map(item => {
				return (
					<Item 
						key={item._id}
						item={item}/>
				)
			})}
		</ul>
	</div>
  );
}
