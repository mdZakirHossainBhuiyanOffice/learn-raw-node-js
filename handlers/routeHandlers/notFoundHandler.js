/*
    Title: Not Found Handler
    Description: 404 Not Found Handler
    Author: Md Zakir Hossain Bhuiyan
    Date: 15/12/23
*/

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(500, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
