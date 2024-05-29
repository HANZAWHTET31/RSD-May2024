import { useState, useEffect } from 'react'
import Item from "./Item";

const api = "http://localhost:8181/todoList";

export default function App(){
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);

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
