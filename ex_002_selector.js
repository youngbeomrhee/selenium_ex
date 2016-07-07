/**
 * http://www.bsidesoft.com/?p=2196
 */

// 테스트 서버 구동
const testServer = require('./server/test_server.js');
testServer.run();

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const driver = new webdriver.Builder().forBrowser('chrome').build();
const By = webdriver.By;

const url = 'http://localhost:8000';
//html을 업로드한 경로에서 불러온다
driver.get(url);

const el = driver.findElement(By.id('title'));

el.getText().then(v=>console.log(v));

// driver와 WebElement 모두 findElement 메서드가 존재하므로 체이닝 할 수 있다.
const div = driver.findElement(By.css('#myDiv'));
const span = div.findElement(By.tagName('span'));
span.getInnerHtml().then(v=>console.log(v));

