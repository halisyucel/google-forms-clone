import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const router = Router();

router.post('/check', UserController.checkUser);

router.post('/sign-in', UserController.signIn);

router.post('/sign-up', UserController.signUp);

router.post('/authenticate', UserController.checkToken);

router.delete('/', UserController.deleteUser);

export default router;
