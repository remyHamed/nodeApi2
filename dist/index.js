"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
(0, fs_1.readFile)("data/sample.txt", function (err, data) {
    if (err || !data) {
        console.error(err);
        return;
    }
    const str = data.toString();
    console.log("read complet \n" + str);
});
function writeAverag() {
    let str = (0, fs_1.readFile)("data/marks.csv", function (err, data) {
        if (err || !data) {
            console.error(err);
            return;
        }
        const str = data.toString();
        const lines = str.split('\n');
        let sum = 0;
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].split(":");
            const mark = parseInt(line[1]);
            sum += mark;
        }
        console.log("res" + sum / (lines.length - 1));
    });
}
;
/*writeMarks([
    {name:"johnatan", mark:4},
    {name:"Aristide", mark:3},
    {name:"lucas", mark:9},
    {name:"theo", mark:20},
]);*/
writeAverag();
//# sourceMappingURL=index.js.map