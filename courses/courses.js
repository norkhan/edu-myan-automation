const { By } = require('../selenium/driver')
const { courseList, courseUrl } = require('./mock')

const CourseList = async (driver) => {
    try {
        await driver.get(courseUrl)
    } catch (error) {
        console.error(error)
    }
    await driver.get(courseList.core1)
    await driver.sleep(2000)
    await driver.get(courseList.core2)
    await driver.sleep(2000)
    await driver.get(courseList.core3)
    await driver.sleep(2000)
    await driver.get(courseList.core4)
    await driver.sleep(2000)
    await driver.get(courseList.core5)
    await driver.sleep(2000)
}
module.exports = CourseList
