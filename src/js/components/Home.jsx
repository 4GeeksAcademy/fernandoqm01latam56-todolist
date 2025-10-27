import React, { useState } from "react";

const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [list, setList] = useState(["Lavar la ropa", "Limpiar la casa", "Ponerme al día", "Estudiar"]);
	const [hoverIndex, setHoverIndex] = useState(null);

	const addTodo = () => {
		const tarea = newTodo.trim();
		if (tarea === "") return;
		setList([...list, tarea]);
		setNewTodo("");
	};

	const handleChange = (event) => {
		setNewTodo(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			addTodo();
		}
	};

	const deleteTarea = (indice) => {
		const nuevaLista = list.filter((_, i) => i !== indice);
		setList(nuevaLista);
	};

	return (
		<div className="text-center p-2">
			<h1 className="text-center mt-5">Todo List React</h1>

			<div className="container p-2 mt-2">
				<div className="d-flex">
					<input
						type="text"
						className="form-control"
						value={newTodo}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						placeholder="Escribe una nueva tarea..."
					/>
					<button className="btn btn-info ms-2" onClick={addTodo}>
						Agregar
					</button>
				</div>

				<ul className="list-group p-2 mt-3">
					{list.length === 0 ? (
						<li className="list-group-item"> 
							No hay Tareas, Agrega alguna.
						</li>
					) : (
						list.map((todo, indice) => (
							<li
								key={indice}
								className="list-group-item d-flex justify-content-between align-items-center"
								onMouseEnter={() => setHoverIndex(indice)}
								onMouseLeave={() => setHoverIndex(null)}
							>
								{todo}
								{hoverIndex === indice && (
									<button
										className="btn btn-info"
										onClick={() => deleteTarea(indice)}
									>
										X
									</button>
								)}
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;
