import {config} from 'dotenv';
import path from 'path';
config({path: path.resolve(__dirname, '../.env')});

export default {
	PORT: process.env.PORT,
	PRODUCTION: process.env.NODE_ENV !== "development",
	HOST: process.env.HOST,
	DBURI: process.env.DBURI
}
