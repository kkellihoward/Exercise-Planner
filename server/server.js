import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


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

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const uri = process.env.MONGODB_URI;
// connect to database
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'exercise'})
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
    		console.log('connected to database and listening on port', process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error)
});