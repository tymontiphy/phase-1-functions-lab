// Code your solution in this file!


function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42); // Calculate the absolute distance
}

function distanceFromHqInFeet(somevalue) {
    return distanceFromHqInBlocks(somevalue)*264;
}

function distanceTravelledInFeet(start, destination){
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * 264;
}

function calculatesFarePrice(start, destination){
    const distanceInFeet = Math.abs(destination - start) * 264;
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}