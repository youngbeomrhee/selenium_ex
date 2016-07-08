"use strict";
// 테스트 서버 구동
const testServer = require('./test_server.js');
const reportServer = require('./report_server.js');

exports.run = function() {
    testServer.run();
    reportServer.run();
};
