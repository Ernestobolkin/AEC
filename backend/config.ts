const Config = {
    jwtSecret: process.env.MONGOCONNECTIONSTRING || ``,
    mongoConnectionString: process.env.MONGOCONNECTIONSTRING || ""
}

export default Config;