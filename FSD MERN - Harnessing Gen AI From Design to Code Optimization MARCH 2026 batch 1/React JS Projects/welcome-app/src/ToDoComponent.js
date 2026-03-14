import React, { useState } from 'react';

function ToDoComponent() {
	const [task, setTask] = useState('');
	const [todos, setTodos] = useState([]);

	const handleAdd = (e) => {
		e.preventDefault();
		if (task.trim() === '') return;
		setTodos([...todos, { text: task, done: false }]);
		setTask('');
	};

	const handleToggle = (idx) => {
		// Create a shallow copy of the todos array
		const updatedTodos = [...todos];
		// Create a new object for the toggled todo to maintain immutability
		updatedTodos[idx] = { ...updatedTodos[idx], done: !updatedTodos[idx].done };
		setTodos(updatedTodos);
	};

	const handleDelete = (idx) => {
		setTodos(todos.filter((_, i) => i !== idx));
	};

	return (
		<div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
			<h2>To-Do List</h2>
			<form onSubmit={handleAdd} style={{ marginBottom: 16 }}>
				<input
					type="text"
					value={task}
					onChange={e => setTask(e.target.value)}
					placeholder="Enter a task"
					style={{ width: '70%', padding: 8 }}
				/>
				<button type="submit" style={{ width: '28%', marginLeft: '2%', padding: 8 }}>Add</button>
			</form>
			<ul style={{ listStyle: 'none', padding: 0 }}>
				{todos.map((todo, idx) => (
					<li key={idx} style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
						<span
							onClick={() => handleToggle(idx)}
							style={{
								textDecoration: todo.done ? 'line-through' : 'none',
								flex: 1,
								cursor: 'pointer',
								color: todo.done ? '#888' : '#222'
							}}
						>
							{todo.text}
						</span>
						<button onClick={() => handleDelete(idx)} style={{ marginLeft: 10 }}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoComponent;
