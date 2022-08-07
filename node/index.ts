import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

import morgan from 'morgan';

const app: Express = express();
const port = process.env.PORT;

app.use(morgan('dev'));

app.get('/status', (req: Request, res: Response) => {
    res.status(200).send('online');
});

app.listen(port, () => {
    console.log(`express server spinning on port ${port}`);
});
