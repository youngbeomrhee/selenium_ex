//웹드라이버, By, 크롬드라이버 준비

const webdriver = require('selenium-webdriver'), By = webdriver.By;
const opera = require('selenium-webdriver/opera');


//워커와 레포트 준비
const worker = new webdriver.Builder().forBrowser('opera').build();
const report = new webdriver.Builder().forBrowser('opera').build();

//레포트의 준비
const reportUrl = 'http://localhost:8001';
report.get(reportUrl);

//테스트시작
const testUrl = 'http://localhost:8000';
worker.get(testUrl);
worker.findElement(By.id('title')).getText().then(
    v=>report.executeScript(
        `document.getElementById('report').innerHTML += "<li>${v == 'selenium test'}</li>";`
    )
);

