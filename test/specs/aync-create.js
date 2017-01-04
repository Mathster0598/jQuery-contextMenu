var assert = require('assert');
describe('Test async create', function() {
    it('should render async created context menu', function () {
        browser.url('/test/integration/html/async-create.html');
        browser.waitForVisible('.context-menu-one');
        browser.rightClick('.context-menu-one');
        browser.waitForVisible('.context-menu-root');
        browser.waitForExist('#context-menu-layer');
        assert.equal(3, browser.elements('.context-menu-root li').value.length);
    });
});
