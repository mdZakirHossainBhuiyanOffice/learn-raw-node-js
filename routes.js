/*
    Title: Handle Routes
    Description: Handle all Routes
    Author: Md Zakir Hossain Bhuiyan
    Date: 15/12/23
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
