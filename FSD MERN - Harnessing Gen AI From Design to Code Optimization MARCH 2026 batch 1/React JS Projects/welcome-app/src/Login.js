import React, { useState } from 'react';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const validateEmail = (email) => {
		// Simple email regex
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		setSuccess('');

		if (!email || !password) {
			setError('Both fields are required.');
			return;
		}
		if (!validateEmail(email)) {
			setError('Please enter a valid email address.');
			return;
		}
		// Dummy authentication logic
		if (email === 'user@example.com' && password === 'password123') {
			setSuccess('Login successful!');
		} else {
			setError('Invalid email or password.');
		}
	};

	return (
		<div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: 16 }}>
					<label>Email:</label><br />
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						style={{ width: '100%', padding: 8 }}
					/>
				</div>
				<div style={{ marginBottom: 16 }}>
					<label>Password:</label><br />
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						style={{ width: '100%', padding: 8 }}
					/>
				</div>
				<button type="submit" style={{ width: '100%', padding: 10 }}>Login</button>
			</form>
			{error && <div style={{ color: 'red', marginTop: 16 }}>{error}</div>}
			{success && <div style={{ color: 'green', marginTop: 16 }}>{success}</div>}
		</div>
	);
}

export default Login;
