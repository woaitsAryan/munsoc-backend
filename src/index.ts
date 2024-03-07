import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import getEnv from './helpers/getEnv.js';
import connectToDB from './initializers/db.js';
import sampleRouter from './routes/sample.route.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = getEnv.PORT;

connectToDB();

app.use(cors());
app.use(express.json());
app.use(helmet());

if (getEnv.ENVIRONMENT === 'dev') app.use(morgan('dev'));

// Routes
app.use('/register', sampleRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

export default app;