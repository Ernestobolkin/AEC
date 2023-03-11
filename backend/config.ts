import dotenv from 'dotenv';
dotenv.config();

const Config = {
    jwtSecret: process.env.MONGOCONNECTIONSTRING || ``,
    mongoConnectionString: process.env.MONGOCONNECTIONSTRING || ""
}

export default Config;