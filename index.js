/*
    Title: Uptime Monitoring Application
    Description: A RESTFul API to monitor up or down time of user defined links
    Author: Md Zakir Hossain Bhuiyan
    Date: 15/12/23
*/

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
// const data = require('./lib/data');

// App object - module scaffolding
const app = {};

// ================================================ Manual CRUD Implementation at file system

// testing file system
// data.create('test', 'testFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
//     console.log('error was ', err);
// });

// data.read('test', 'newFile', (err, result) => {
//     console.log(err, result);
// });

// data.update('test', 'newFile', { name: 'Bangladesh', language: 'Bengali' }, (err) => {
//     console.log('error was ', err);
// });

// data.delete('test', 'testFile', (err) => {
//     console.log('error was ', err);
// });

// ================================================

// Configuration
// app.config = {
//     port: 3000,
// };

// Create Server

app.createServer = () => {
    const server = http.createServer(app.handleRequest);
    server.listen(environment.port, () => {
        console.log(`listening on port ${environment.port}`);
    });
};

// Handle Request Response
app.handleRequest = handleReqRes;

// Start the server
app.createServer();
