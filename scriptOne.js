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
