import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


// starts up express app
const app = express();
app.use(cors());
app.options('*', cors());

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.end('it works!');
});

app.use((req, res, next) => 
{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
	'Access-Control-Allow-Headers',
	'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.setHeader(
	'Access-Control-Allow-Methods',
	'GET, POST, PATCH, DELETE, OPTIONS'
	);
	next();
});

dotenv.config();

// connect to database
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'exercise'})
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
    		console.log('connected to database and listening on port', process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error)
});