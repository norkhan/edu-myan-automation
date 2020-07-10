const { Driver, By } = require('../selenium/driver')
const { signUpUrl, signUpSelector, signupValue } = require('./mock')

const Signup = async () => {
    var driver = await new Driver().build()
    try {
        await driver.get(signUpUrl)
    } catch (error) {
        console.error(error)
    }
    await driver.findElement(By.name(signUpSelector.name)).sendKeys(signupValue.name)
    await driver.findElement(By.name(signUpSelector.email)).sendKeys(signupValue.email)
    await driver.findElement(By.name(signUpSelector.password)).sendKeys(signupValue.password)
    await driver.findElement(By.name(signUpSelector.confirmPassword)).sendKeys(signupValue.confirmPassword)
    await driver.findElement(By.name(signUpSelector.phoneNumber)).sendKeys(signupValue.phoneNumber)
    var _city = await driver.findElement(By.name(signUpSelector.citySelectoror))
    await _city.click()
    await _city.sendKeys('Yangon')
    await driver.executeScript("window.scrollBy(0,250)", "");
    await _city.click()
    driver.sleep(2000)
    driver.executeScript("alert(\"Captcha image within 10sec!\")", "")
    // await driver.sleep(10000)
    // await driver.findElement(By.className(signUpSelector.signUpButton)).click()
    // await driver.quit()
}
module.exports = Signup
