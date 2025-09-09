const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// console.log(AssignmentGroup);
// console.log(AssignmentGroup.assignments[0].id);

// let assignment1 =
// let assignment2 =

function getLearnerData(course, avg, submissions) {
  // sample of what the final input should look like in console
  // here, we would process this data to achieve the desired result.
  //   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0 // 150 / 150
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833 // late: (140 - 15) / 150
  //     }
  //   ];
  //   return result;
}
let learnerArray = [];

for (const item of LearnerSubmissions) {
  let idExists = false;

  for (const obj of learnerArray) { //initializing variable obj within that group
    if (item.learner_id === obj.id) { //checking if theres same id # 
      obj[item.assignment_id] = item.submission.score;

      for (const assign of AssignmentGroup.assignments){
        if (item.assignment_id === assign.id) { //if these are the same assignment ids
          obj.totalpp = obj.totalpp + assign.points_possible 
          break; 
        }
      }
      obj.sum = obj.sum + item.submission.score
      idExists = true;
      break;
    }
  }
  if (idExists === false) {
    for (const assign of AssignmentGroup.assignments){
        if (item.assignment_id === assign.id) { //if these are the same assignment ids
          let studentObject = {
            id: item.learner_id,
            avg: 0,
            [item.assignment_id]: item.submission.score,
            sum: item.submission.score,
            totalpp: assign.points_possible 
          };
          learnerArray.push(studentObject); //adding to the learnerData array
        }
      }
  }
}

// console.log(learnerArray);

// Create a for loop for all learners of your learnerArray
// set the value for average to sum divided by total points possible
// console.log learnerArray after the for loop is complete
for(const learner of learnerArray) {
  learner.avg = learner.sum/learner.totalpp
  delete learner.sum
  delete learner.totalpp
}
console.log(learnerArray);