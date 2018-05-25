let task2 = (function () {
    let mas = [];
    let n = 1000; //length
    let maxCount =1000000000;
    let minCount=-1000000000;
    let k = 0;
    let mas2 = [];
    function fill() {
        for (let i = 0; i < n; i++) {
            mas[i] = Math.round(Math.random() * (maxCount -minCount) + minCount);
        }
    };

    function calc() {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    mas2[k] = Math.abs(mas[i] - mas[j]);
                    k++;
                }
            }
        }
    }
    function min(mas) {
        let min = mas[0];
        for (let i = 0; i < mas.length; i++) {
            if (mas[i] < min) {
                min = mas[i];
            }
        }
        return min;
    }
    function start() {
        fill();
        calc();
        min(mas);
        console.log(min(mas2));
    }
    return{
        start:start
    }
})();
let task3 = (function () {
    function isRivni(a, b) {
        var str = b.join('');
        let flag = true;
        a.forEach(function (el) {
            if (!(str.indexOf(el) + 1)) {
                flag = false;
            }
        });
        return flag;
    };
    function isInMas(arr, el) {
        let str = "";
        for (i = 0; i < arr.length; i++) {
            str += arr[i].content;
        }
        ;
        if ((str.indexOf(el) + 1)) {
            return true;
        }
        return false;
    }
    function createAll(arrOfPizza) {
        let length = arrOfPizza.length;
        let count = [];
        for (i = 0; i < length; i++) {
            count[i] = {};
            count[i].position = 0;
            count[i].coun = 1;
        }

        let max = 1;
        let positionOfMAx;
        for (let i = 0; i < mas.length; i++) {
            for (let j = 0; j < mas.length; j++) {
                if (i != j) {
                    if (isRivni(mas[i], mas[j])) {
                        count[i].position = i;
                        count[i].coun++;
                        if (count[i].coun > max) {
                            max = count[i].coun
                            positionOfMAx = count[i].position;
                        }
                        ;

                    }
                    ;
                }
            }
        }
        return [positionOfMAx,max];
    }
    function start(mas) {
        let positionOfMAx= createAll(mas);
        console.log("піца: '" + mas[positionOfMAx[0]] + "' найчастіше вживається, а тобто " +positionOfMAx[1] +" рази(ів)");
    }

    return{
        start:start
    }
})();
let task4 = (function () {
    function pascalRecursive(n, a, lineNumber) {

        if (n < 2) return a; // We already have the top row

        var prevTier = a[a.length - 1];
        var curTier = [1];

        for (var i = 1; i < prevTier.length; i++) {
            curTier[i] = prevTier[i] + prevTier[i - 1];
        }
        curTier.push(1);
        a.push(curTier);
        if (lineNumber == 0) {
            console.log(curTier);
        }
        return pascalRecursive(n - 1, a, --lineNumber);
    }
    function start(lineNumber) {
        pascalRecursive(lineNumber + 1, [[1]], lineNumber - 1);
    }

    return{
        start:start
    }
})();
console.log("завдання 2: \n");
task2.start();
console.log("завдання 3: \n");
let mas = [
    ["кукурудза", "томат", "гриби"],
    ["кукурудза", "гриби", "томат"],
    ["gfk", "гриби", "томат"],
    ["gggg", "ggg", "томат"],
    ["кукурудза", "паста", "гриби"],
    ["кукурудза", "паста", "гриби"],
    ["кукурудза", "паста", "гриби"]];
task3.start(mas);
console.log("завдання 4: \n");
task4.start(3);





