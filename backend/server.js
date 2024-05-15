import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
	})
);

app.listen(5000, () => {
    console.log('Server running on port 5000');
})