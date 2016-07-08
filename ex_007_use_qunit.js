const webdriver = require('selenium-webdriver'), By = webdriver.By;
const chrome = require('selenium-webdriver/chrome');
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// 테스트 서버(reporter, worker) 구동
const reporterServer = require('./server/reportQunit_server.js');
reporterServer.run('reporter_qunit.html');

driver.get('http://localhost:8001');

driver.executeScript(
    `assert.ok('hello test', false, 'test success');`
);
//테스트시작
/*
const worker = new webdriver.Builder().forBrowser('chrome').build();
worker.get('http://localhost:8000');
worker.findElement(By.id('title')).getText().then(v=>reporter.report(v == 'page for selenium'));
*/


// TODO : pushResult()로 변환