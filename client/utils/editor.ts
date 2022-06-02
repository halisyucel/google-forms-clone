export interface Color {
	name: string;
	color: string;
	bgColors: string[];
}
export const colors: Color[] = [
	{
		name: 'Red',
		color: '#db4437',
		bgColors: ['#fae3e1', '#f6d0cd', '#f2beb9', '#f6f6f6'],
	},
	{
		name: 'Purple',
		color: '#673ab7',
		bgColors: ['#f0ebf8', '#e1d8f1', '#d1c4e9', '#f6f6f6'],
	},
	{
		name: 'Indigo Blue',
		color: '#3f51b5',
		bgColors: ['#eceef8', '#d9dcef', '#c5cbe9', '#f6f6f6'],
	},
	{
		name: 'Blue',
		color: '#4285f4',
		bgColors: ['#e9f0f8', '#dceef1', '#c5e1e9', '#f6f6f6'],
	},
	{
		name: 'Light Blue',
		color: '#03a9f4',
		bgColors: ['#e1f5f8', '#d0eef1', '#b9dce9', '#f6f6f6'],
	},
	{
		name: 'Cyan',
		color: '#00bcd4',
		bgColors: ['#e0f7fa', '#b2ebf2', '#80deea', '#f6f6f6'],
	},
	{
		name: 'Orange Red',
		color: '#ff5722',
		bgColors: ['#fbe9e7', '#f7d4d3', '#f2b9b6', '#f6f6f6'],
	},
	{
		name: 'Orange',
		color: '#ff9800',
		bgColors: ['#fff3e0', '#ffe0c4', '#ffcc9a', '#f6f6f6'],
	},
	{
		name: 'Turquoise',
		color: '#009688',
		bgColors: ['#e0f2f1', '#b2dfdb', '#80cbc4', '#f6f6f6'],
	},
	{
		name: 'Green',
		color: '#4caf50',
		bgColors: ['#e8f5e9', '#c8e6c9', '#a5d6a7', '#f6f6f6'],
	},
	{
		name: 'Gray-Blue',
		color: '#607d8b',
		bgColors: ['#eceff1', '#cfd8dc', '#b0bec5', '#f6f6f6'],
	},
	{
		name: 'Gray',
		color: '#9e9e9e',
		bgColors: ['#fafafa', '#f5f5f5', '#eeeeee', '#f6f6f6'],
	},
];
