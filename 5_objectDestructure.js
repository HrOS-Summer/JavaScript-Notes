//Object Destructuring : unpack properties from objects into distinct variables
let course = {
    courseInstructor : "Hitesh",
    courseId : "213JBF"
}

const {courseInstructor : instructor, courseId} = course
console.log(courseId)

//JSON
// {
//     "name" : "Hiteh",
//     "coursename" : "jsco1",
//     "price" : "free"
// }

//API is also in form of JSON