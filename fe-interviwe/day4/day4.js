//写一个方法把下划线命名转成大驼峰命名

function modifyTheName(str) {
    let res = "";
    let flag = 0;
    str = str.toLowerCase();
    for (c of str) {
        if (c == "_") {
            flag = 1;
            continue;
        }
        if (flag > 0){
            c = c.toUpperCase();
            flag = 0;
        }
        res += c;
    }
    return res;
}


test = "ttt_aasDDFSdsad_Sadasd";
res = modifyTheName(test);
console.log(res);
