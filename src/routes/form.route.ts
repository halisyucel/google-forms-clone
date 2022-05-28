import { Router } from 'express';
import * as FormController from '../controllers/form.controller';

const router = Router();

router.post('/', FormController.create);

router.get('/', FormController.get);

router.put('/', FormController.update);

export default router;
