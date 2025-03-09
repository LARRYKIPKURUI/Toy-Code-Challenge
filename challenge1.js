
//Student Grade Generator

function inputMarks (marks) {
    if (marks >0 && marks < 100) {
        if (marks >= 79) {
            console.log(`Your grade is A`);
        } else if (marks >=60 && marks <= 79) {
            console.log(`Your grade is B`);
        }else if (marks >=49 && marks <= 59) {
            console.log(`Your grade is C`);
        }else if (marks >=40 && marks <= 49) {
            console.log(`Your grade is D`);
        }else if (marks < 40 ) {
            console.log(`Your grade is E`);
        }
    } else {
        return  console.log('Marks not in range')
    }
}

inputMarks(60);