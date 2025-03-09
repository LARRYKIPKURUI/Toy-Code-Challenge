
// Speed Detector 

// let speedLimit = 70 ;
// let demeritPoint = 0;
// let moreSpeed = speedLimit + 5 ;



function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5; //point per 5km

    if (speed <= speedLimit) {
        console.log('Ok');
    } else {
        let demeritPoint = Math.floor((speed - speedLimit) / kmPerDemerit);
        console.log(`Your total demerit points are ${demeritPoint}`);

        if (demeritPoint >= 12) {
            console.log('Your License is suspended');
        }
    }
}


speedDetector(75);
speedDetector(197);