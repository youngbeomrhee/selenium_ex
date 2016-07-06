/**
 * http://www.bsidesoft.com/?p=2196
 */

const webdriver = require('selenium-webdriver');
const opera = require('selenium-webdriver/opera');
const driver = new webdriver.Builder().forBrowser('opera').build();
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

