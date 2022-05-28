import { Router } from 'express';
import * as AssetsController from '../controllers/assets.controller';
import { upload } from '../services/assets.service';

const router = Router();

router.get('/', AssetsController.get);

router.delete('/', AssetsController._delete);

router.post('/upload', upload.single('file'), AssetsController.upload);

export default router;
