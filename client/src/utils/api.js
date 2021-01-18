import axios from "axios"

var prefix = "https://advancementorship.herokuapp.com"
// prefix = "http://localhost:4000" // uncomment for local testing

export default {
    // Get all campuses
    getCampuses: async function () {
        return (await axios.get(`${prefix}/api/v1/campus`)).data
    },
    // Get all mentors
    getMentors: async function () {
        return (await axios.get(`${prefix}/api/v1/mentor`)).data
    },
    // Get advisors to be displayed on the main page
    getAdvisors: async function () {
        return (await axios.get(`${prefix}/api/v1/advisor`)).data
    },
    // Get advisors by the campus anchor tag (eg apu, american, ucla)
    getAdvisorsByCampus: async function (campusAnchor) {
        return (await axios.get(`${prefix}/api/v1/advisor/campus/${campusAnchor}`)).data
    },
    /**
     * Submit a user's signup info
     * @param {Object} userInfo contains: firstname*, lastname*, email**, gender*, 
     * school*, otherSchool, city*, collegeTrack, careerTrack, adultingTrack, 
     * leadershipTrack, gradSchoolTrack, softSkillsTrack.
     * (*required, **must be edu email)
     */
    userSignup: async function (userInfo) {
        if (!userInfo || typeof(userInfo) !== "object") {
            return Error("Invalid userInfo!")
        }
        if (!('firstname' in userInfo) || !('lastname' in userInfo) ||
            !('email' in userInfo) || !('gender' in userInfo) ||
            !('school' in userInfo) || !('city' in userInfo)) {
            return Error("userInfo must contain firstname, lastname, email, gender, school, city")
        }
        return (await axios.post(`${prefix}/api/v1/signup`, userInfo))
    }
}