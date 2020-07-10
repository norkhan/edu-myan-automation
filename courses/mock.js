const { rootUrl } = require('../util')
const path = require('path')
const course = rootUrl != 'http://educatemyanmar.com/' ? 'course' : 'course-detail'
const courseList = {
    'core1': path.join(rootUrl, course + '/1'),
    'core2': path.join(rootUrl, course + '/2'),
    'core3': path.join(rootUrl, course + '/3'),
    'core4': path.join(rootUrl, course + '/4'),
    'core5': path.join(rootUrl, course + '/5'),
}
const courseUrl = rootUrl
module.exports = { courseList, courseUrl }