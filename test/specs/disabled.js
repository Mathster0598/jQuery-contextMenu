var assert = require('assert');

describe('Test disabled item', function () {
    it('Clicking on disabled item has no effect', function () {
        browser.url('/test/integration/html/disabled.html');
        browser.waitForVisible('.context-menu-one');
        browser.rightClick('.context-menu-one');
        var elements = browser.elements('.context-menu-root li')
        assert.equal(2, elements.value.length, '2 context menu items are shown');
        browser.click('.context-menu-root li:last-child');
        try {
            browser.alertText()
        } catch(e){
            return;
        }
        assert.equal(false,true, 'Alert was opened.');
    });

    it('Clicking on enabled item works', function () {
        browser.url('/test/integration/html/disabled.html');
        browser.waitForVisible('.context-menu-one');
        browser.rightClick('.context-menu-one');
        browser.waitForVisible('.context-menu-root li');
        var elements = browser.elements('.context-menu-root li');
        assert.equal(2, elements.value.length, '2 context menu items are shown');
        browser.click('.context-menu-root li:first-child');
        var alertText = browser.alertText();
        assert.equal(alertText, 'clicked: edit');
    });
});
