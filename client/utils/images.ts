export interface Image {
	url: string;
	src?: string;
}

export const defaultImages: Image[] = [
	{
		url: 'default_header_image_1.jpg',
		src: 'https://unsplash.com/photos/HAeZCnUWK58',
	},
	{
		url: 'default_header_image_2.jpg',
		src: 'https://unsplash.com/photos/Yqd_6IfaS-8',
	},
	{
		url: 'default_header_image_3.jpg',
		src: 'https://unsplash.com/photos/VOwcBICzIgY',
	},
	{
		url: 'default_header_image_4.jpg',
		src: 'https://unsplash.com/photos/fwJnAu6sXhs',
	},
	{
		url: 'default_header_image_5.jpg',
		src: 'https://unsplash.com/photos/beXs3ib06NQ',
	},
	{
		url: 'default_header_image_6.jpg',
		src: 'https://unsplash.com/photos/C6PGsReJlZI',
	},
	{
		url: 'default_header_image_7.jpg',
		src: 'https://unsplash.com/photos/NqqVIFTkEbY',
	},
	{
		url: 'default_header_image_8.jpg',
		src: 'https://unsplash.com/photos/qL0953icswU',
	},
];

export const acceptableMimeTypes = ['image/jpeg', 'image/png'];
