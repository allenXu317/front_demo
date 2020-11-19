


function findLast(str,target) {
    let loc = 0;
    let j = 0;
    for (i of str) {
        // console.log(i,target,j);
        j++;
        if (i == target) {
            loc = j;
        }
    }
    return loc;
}

function myDel(str,target) {
    let loc = findLast(str,target);
    // console.log(loc);
    let res = "";
    let j = 0;
    for (i of str) {
        if (j == loc-1) {
            j++;
            continue;
        }
        res += i;
        j++;
    }
    return res;
}


let str = "sadasdadasdasd";
let target = "s";
let res = myDel(str,target);
console.log(str);
console.log(res);

