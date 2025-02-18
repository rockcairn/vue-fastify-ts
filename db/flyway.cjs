const dotenv =  require('dotenv');
dotenv.config();

// This can be a function or an object literal.
module.exports = function() {
    return {
        flywayArgs: {
            url: `jdbc:mysql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            locations: 'filesystem:db/migrations',
            sqlMigrationSuffixes: '.sql',
            baselineOnMigrate: false,
            cleanDisabled: false,
        },
        version: '10.21.0',
        downloads: {
            storageDirectory: 'node_modules',
            expirationTimeInMs: -1,
        }
    };
};