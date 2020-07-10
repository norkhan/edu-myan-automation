const webdriver = require('selenium-webdriver');
const Chrome = require('selenium-webdriver/chrome')

const options = new Chrome.Options()
options.addArguments("--disable-dev-shm-usage");
options.addArguments('--no-sandbox')

//default chrome-driver
class Driver {
    constructor(name = undefined) {
        this.driver = name != undefined ?
            new webdriver.Builder().forBrowser(name) :
            new webdriver
                .Builder()
                .setChromeOptions(options)
                .forBrowser('chrome')
    }
    async build() {
        return await this.driver.build()
    }
}
module.exports.Driver = Driver
module.exports.Key = webdriver.Key
module.exports.By = webdriver.By
module.exports.Until = webdriver.until
