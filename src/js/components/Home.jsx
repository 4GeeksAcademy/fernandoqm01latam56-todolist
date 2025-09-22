
import React, { useState } from "react";


//create your first component
const Home = () => {

	const [newTodo, setNewTodo] = useState("");
	const [list, setList] = useState(["Lavar la ropa ", "Limpiar la casa", "Hacer la cena"]);

	const handelClick = () => {
		if (newTodo.length != 0) {
			setList([...list, newTodo]);
		}
		else {
			alert("Introduce una tarea")
		}
	}

	const handleChange = (event) => {
		setNewTodo(event.target.value);
	}

	const deletTarea = (indice) => {
		const listaNueva = list.filter((Todo, i) => i !== indice)
		setList(listaNueva);
	}

	return (
		<div className="text-center p-2">

			<h1 className="text-center mt-5">Todo List React</h1>
			<div className="container p-2 mt-2">
				<div className="d-flex" >

					<input type="text" className="form-control" onChange={handleChange} />

					<button className="btn btn-light" onClick={handelClick}>Agregar Tarea</button>

				</div>
				<div>
					<ul className="list-group p2">
						{list.map((Todo, indice) => {
							return (
								<li className="list-group-item p-1 list-group-item d-flex justify-content-between align-items-center" >
									{Todo} <button className="btn btn-light" onClick={() => deletTarea(indice)}>X</button>
								</li>
							);
						})
						}
					</ul>
				</div>
			</div>

		</div>
	);
};

export default Home;