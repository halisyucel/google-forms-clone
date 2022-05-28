import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const mimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];

const extractFileExtension = (mimeType: string): string => {
    const mimeTypeParts = mimeType.split('/');
    return mimeTypeParts[mimeTypeParts.length - 1];
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${uuidv4()}.${extractFileExtension(file.mimetype)}`);
    },
});

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, cb) => {
        if (!mimeTypes.includes(file.mimetype)) {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
        cb(null, true);
    },
});
