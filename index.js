const Signup = require('./pages/signup');
const Login = require('./pages/login');
const Courses = require('./courses/courses')
const { Driver } = require('./selenium/driver');
const { rootUrl } = require('./util');

// automate to educatemyanmar
(async () => {
    //automate to signup page
    await Signup()

    //initiate selenium web-driver
    var driver = await new Driver().build()
    try {
        await driver.get(rootUrl)
    } catch (error) {
        console.error(error)
        driver.quit()
    }
    //automate to login page
    await Login(driver)
    //automate to availabe coure
    await Courses(driver)
    await driver.quit()
}
)()



