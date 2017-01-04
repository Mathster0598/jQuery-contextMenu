var assert = require('assert');

describe('Test submenus', function () {
    it('should navigate to submenu 2 levels deep and see correct alert for charlie', function () {
        browser.url('/test/integration/html/sub-menus_test.html');
        browser.waitForVisible('.context-menu-one');
        browser.rightClick('.context-menu-one');

        browser.waitForVisible('span=Sub group');
        browser.moveToObject('span=Sub group');
        browser.moveToObject('span=Sub group 2');

        browser.waitForVisible('span=charlie');
        browser.leftClick('span=charlie');

        var text = browser.getText('#msg');
        assert.equal(text, 'clicked: fold2-key3');

    });

    it('should navigate to submenu 2 levels deep and see first menu highlighted', function () {
        browser.url('/test/integration/html/sub-menus_test.html');

        browser.waitForVisible('.context-menu-one');
        browser.rightClick('.context-menu-one');

        browser.waitForVisible('span=Sub group');
        browser.moveToObject('span=Sub group');
        browser.moveToObject('span=Sub group 2');

        var elements = browser.elements('.context-menu-hover');
        assert.equal(2, elements.value.length);
    });

});
