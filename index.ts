import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import GeneralConfig from './src/configs/general.config';
import AssetsRoute from './src/routes/assets.route';
import FormRoute from './src/routes/form.route';
import UserRoute from './src/routes/user.route';
import connection from './src/services/db.service';

const app: Express = express();
const port = GeneralConfig.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'OK' });
});

app.use('/api/user', UserRoute);
app.use('/api/form', FormRoute);
app.use('/assets', AssetsRoute);
app.use('/uploads', express.static('assets/uploads'));

(async () => {
	await connection.sync({ alter: true });
	app.listen(port, () => {
		console.log(`[server]: Server is running at http://localhost:${port}`);
	});
})();
