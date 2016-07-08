const webdriver = require('selenium-webdriver'), By = webdriver.By;
const chrome = require('selenium-webdriver/chrome');

// 테스트 서버(reporter, worker) 구동
const testServer = require('./server/server_main.js');
testServer.run();

//레포터준비
const Reporter = require('./reporter.js');
const reporter = new Reporter('http://localhost:8001');

//테스트시작
const worker = new webdriver.Builder().forBrowser('chrome').build();
worker.get('http://localhost:8000');
worker.findElement(By.id('title')).getText().then(v=>reporter.report(v == 'page for selenium'));