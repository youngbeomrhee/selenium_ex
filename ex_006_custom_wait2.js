// 테스트 서버 구동
const testServer = require('./server/test_server.js');
testServer.run();

const reportServer = require('./server/report_server.js');
reportServer.run();

// worker 준비
const Worker = require('./worker.js');
const worker = new Worker('http://localhost:8000');

// reporter 준비
const Reporter = require('./reporter.js');
const reporter = new Reporter('http://localhost:8001');

worker.waitUntil(3000, 'elementLocated', worker.by('id', 'title')).then(el=>console.log(el));

worker.waitCondition(5000,
    'titleIs를 직접 구현!',
    driver=>driver.getTitle().then(t=>t=='test1')
).then(d=>console.log('ok'));

worker.element('#title').then(
    el=>worker.waitElement(5000,
        'elementTextContains를 직접 구현!',
        driver=>el.getText().then(v=>v.indexOf('selenium') > -1 ? el : null)
    )
).then(el=>el.getText()).then(v=>reporter.report(v));
