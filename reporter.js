"use strict";
const wd = require('selenium-webdriver');
const ch = require('selenium-webdriver/chrome');
const DRIVER = Symbol(); //private용 심볼
module.exports = class{
    constructor(url){//보고용 url지정
        this[DRIVER] = new wd.Builder().forBrowser('chrome').build();
        this[DRIVER].get(url);
        Object.freeze(this);
    }
    report(value){//실제보고하기
        this[DRIVER].executeScript(
            `document.getElementById('report').innerHTML += "<li>${value}</li>";`
        );
    }
    quit(){//종료시킴
        this[DRIVER].quit();
    }
};
