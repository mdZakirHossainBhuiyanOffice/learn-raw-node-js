/*
    Title: Environment
    Description: Handle all environment related things
    Author: Md Zakir Hossain Bhuiyan
    Date: 15/12/23
*/

// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
};

environments.production = {
    port: 5000,
    envName: 'production',
};

// determine which environment was passed
// eslint-disable-next-line operator-linebreak
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
// eslint-disable-next-line operator-linebreak
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
