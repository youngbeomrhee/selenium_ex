'use strict';

const wdMain = require('selenium-webdriver'), By = wdMain.By, until = wdMain.until;
const wd = require('selenium-webdriver/lib/webdriver');
const Driver = require('selenium-webdriver/chrome').Driver;

const DRIVER = Symbol();
module.exports = class {
    constructor(url){
        this[DRIVER] = new Driver();
        this[DRIVER].get(url);
    }
    element(css){
        return this[DRIVER].findElement(By.css(css));
    }
    elements(css){
        return this[DRIVER].findElements(By.css(css));
    }
    waitUntil(time, method, ...arg){
        return this[DRIVER].wait(until[method](...arg), time);
    }
    waitElement(time, title, f){
        return this[DRIVER].wait(new wd.WebElementCondition(title, f), time);
    }
    waitCondition(time, title, f){
        return this[DRIVER].wait(new wd.Condition(title, f), time);
    }
    by(method, v){
        return By[method](v);
    }
};
