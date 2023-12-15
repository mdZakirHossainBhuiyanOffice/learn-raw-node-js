/*
    Title: Sample Handler
    Description: Sample Handler
    Author: Md Zakir Hossain Bhuiyan
    Date: 15/12/23
*/

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
