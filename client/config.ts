interface Config {
	MODE: 'development' | 'production';
	API_URL: string,
}

const config: Config = {
	MODE: 'development',
	get API_URL() {
		return this.MODE === 'development' ? 'http://localhost:3001/api' : '/api';
	},
};

export default config;