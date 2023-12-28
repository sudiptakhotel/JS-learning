//Here we are going to see how we can destructure an object .

//destructure of an object means to simplify the process of accessing object's propertis for simpler code visibility and readbility

const course = {
    courseName : "Java script master",
    courseInstructor : "Sudipta",
    courseFee : 9999,
    channel : "codeWithEase.com"
};

// console.log(course);

//lets destructure the some of course's properties
const {courseInstructor} = course; //so after this we can directly use courseInstructor no not to use dot or [] notation

//we can give different name while destructure to make it more easy

// let {courseFee : fee} = course;

// console.log(courseInstructor);
// console.log(fee);

//so in production in many places we are going to use destructure to make things more easy