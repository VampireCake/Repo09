function mathTest( x, y){
    if(x<0 || y<0){
        return undefined;
    }

    else{
        return Math.floor(1+(sqrt(x) + sqrt(y)));
    }
}

mathTest(2,2);
mathTest(-2,2);
mathTest(2,-2);
mathTest(2,8);
mathTest(3,3);
mathTest(0, 0);
