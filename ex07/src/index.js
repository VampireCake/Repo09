function randomRangeNumber(minNumber, maxNumber){
    return Math.floor(minNumber+(maxNumber-minNumber)*Math.random());
}

randomRangeNumber(1, 243);