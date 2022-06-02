import { Upload } from '../models/assets.model';

export interface Image {
	name: string;
	mimetype: string;
	size: number;
}

export interface GetAllUploadsProps {
	userId: string;
}

export const getAllUploads: (props: GetAllUploadsProps) => Promise<Image[]> = async ({
	userId,
}) => {
	const uploads = await Upload.findAll({
		where: { userId },
		order: [['createdAt', 'DESC']],
	});
	return uploads.map((upload) => ({
		name: upload.getDataValue('name'),
		mimetype: upload.getDataValue('mimetype'),
		size: upload.getDataValue('size'),
	}));
};
