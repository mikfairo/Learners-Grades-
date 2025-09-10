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

function getLearnerData(AssignmentGroup, LearnerSubmissions) {
  let learnerArray = [];
  let currentYear = 2025;
  for (const item of LearnerSubmissions) {
    let idExists = false;
    let subYear = Number(item.submission.submitted_at.slice(0, 4));
    let subMonth = Number(item.submission.submitted_at.slice(5, 7));
    let subDay = Number(item.submission.submitted_at.slice(8, 10));
    for (const obj of learnerArray) {
      //initializing variable obj within new variable array
      if (item.learner_id === obj.id) {
        //checking if they are same id # in original and new

        for (const assign of AssignmentGroup.assignments) {
          if (item.assignment_id === assign.id) {
            //if these are the same assignment ids
            let dueYear = Number(assign.due_at.slice(0, 4));
            let dueMonth = Number(assign.due_at.slice(5, 7));
            let dueDay = Number(assign.due_at.slice(8, 10));
            if (dueYear <= currentYear) {
              obj.totalpp += assign.points_possible; //adding to points possible
              if (dueYear >= subYear) {
                if (dueMonth >= subMonth) {
                  if (dueDay > subDay) {
                    obj[item.assignment_id] = item.submission.score;
                  } else {
                    obj[item.assignment_id] = item.submission.score - 15;
                  }
                } else {
                  obj[item.assignment_id] = item.submission.score - 15;
                }
              } else {
                obj[item.assignment_id] = item.submission.score - 15;
              }

              obj.sum += obj[item.assignment_id]; //to count for average
              obj[item.assignment_id] = obj[item.assignment_id]; //to include or not to include id and score
            }

            break;
          }
        }
        idExists = true;
        break;
      }
    }
    if (idExists === false) {
      for (const assign of AssignmentGroup.assignments) {
        if (item.assignment_id === assign.id) {
          //if learner id false add following object below
          let dueYear = Number(assign.due_at.slice(0, 4));
          let dueMonth = Number(assign.due_at.slice(5, 7));
          if (dueYear <= subYear && dueMonth <= subMonth) {
            let studentObject = {
              id: item.learner_id,
              avg: 0,
              [item.assignment_id]: item.submission.score,
              sum: item.submission.score,
              totalpp: assign.points_possible, //50, 150
            };
            learnerArray.push(studentObject); //adding to the learnerData array final loop
          }
        }
      }
    }
  }

  for (const learner of learnerArray) {
    learner.avg = learner.sum / learner.totalpp;
    // learner.item.assignment_id = item.submission.score/assign.points_possible
    delete learner.sum;
    delete learner.totalpp;
  }
  return learnerArray;
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
let result = getLearnerData(AssignmentGroup, LearnerSubmissions);
console.log(result);
