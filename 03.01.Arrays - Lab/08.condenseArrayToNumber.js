function condenseArrayToNumber(arr) {
    let res = [];
    for(let el of arr) {
        res.push(el);
    }
    while(res.length > 1) {
        let myArr = [];
        for(let i = 0; i < res.length - 1; i++) {
            myArr[i] = res[i] + res[i + 1];
        }
        res = myArr;
    }
    console.log(res.join());
}
condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);