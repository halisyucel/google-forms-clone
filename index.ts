import express, { Express, Request, Response } from 'express';
import GeneralConfig from './src/configs/general.config';
import UserRoute from './src/routes/user.route';
import cors from 'cors';

const app: Express = express();
const port = GeneralConfig.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'OK' });
});

app.use('/api/user', UserRoute);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});