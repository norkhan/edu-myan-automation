const { Driver } = require('../selenium/driver');
const expect = require('chai').expect

describe('test google.com firefox', async () => {
    var firefox
    beforeEach(async () => {
        firefox = await new Driver('firefox').build()
    });

    afterEach(() => {
        firefox.quit();
    });

    it('should open google search with firefox', async () => {
        await firefox.get('http://www.google.com');
        var title = await firefox.getTitle()
        expect(title).equal('Google')

    });
})
describe('test google.com chrome', async () => {
    var chrome
    beforeEach(async () => {
        chrome = await new Driver().build()
    });

    afterEach(() => {
        chrome.quit();
    });

    it('should open google search with chrome', async () => {
        await chrome.get('http://www.google.com');
        var title = await chrome.getTitle()
        expect(title).equal('Google')

    });
});
