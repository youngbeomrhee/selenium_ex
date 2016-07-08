const wdMain = require('selenium-webdriver');
const By = wdMain.By;

//Condition과 WebElementCondition 정의
const wd = require('selenium-webdriver/lib/webdriver');
const chrome = require('selenium-webdriver/chrome');
const Condition = wd.Condition;
const WebElementCondition = wd.WebElementCondition;

// 테스트 서버(reporter, worker) 구동
const testServer = require('./server/server_main.js');
testServer.run();

//레포터준비
const Reporter = require('./reporter.js');
const reporter = new Reporter('http://localhost:8001');

const worker = new chrome.Driver();
worker.get('http://localhost:8000');

//titleIs를 직접 구현한 경우
worker.wait(
    new Condition(
        'titleIs를 직접 구현!',
        driver=>driver.getTitle().then(t=>t=='test1')
    ),
    5000
).then(d=>console.log('ok'));

//elementTextContains를 직접 구현한 경우
worker.findElement(By.id('title')).then(
    el=>worker.wait(
        new WebElementCondition(
            'elementTextContains를 직접 구현!',
            driver=>el.getText().then(v=>v.indexOf('selenium') > -1 ? el : null)
        )
    ),
    5000
).then(el=>el.getText()).then(v=>reporter.report(v));
