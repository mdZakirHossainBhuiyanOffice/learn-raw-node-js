/*
    Title: utilities
    Description: Important utility function
    Author: Md Zakir Hossain Bhuiyan
    Date: 15/12/23
*/

// dependencies

// module scaffolding
const utilities = {};

utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch {
        output = {};
    }

    return output;
};

// export module
module.exports = utilities;
