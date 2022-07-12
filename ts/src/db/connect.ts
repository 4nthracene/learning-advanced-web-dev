import mongoose from 'mongoose';
import config from 'config';
import log from '../logger';

async function connect() {
  try {
    const DBURI = config.get('DBURI') as string;
    await mongoose.connect(DBURI);
	// log.info(`[DATABASE]: Connected successfully ${mongoose.connection.name}`);
  } catch (e) {
	  console.log(e);
	  log.error(`[DATABASE]: Connection error`);
	  process.exit(1);
  }
}

export default connect;
