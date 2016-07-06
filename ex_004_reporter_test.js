const webdriver = require('selenium-webdriver'), By = webdriver.By;
const opera = require('selenium-webdriver/opera');

//레포터준비
const Reporter = require('./ex_004_reporter.js');
const reporter = new Reporter('http://localhost:8001');

//테스트시작
const worker = new webdriver.Builder().forBrowser('opera').build();
worker.get('http://localhost:8000');
worker.findElement(By.id('title')).getText().then(v=>reporter.report(v == 'selenium test'));
