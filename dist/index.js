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
console.log("read start");
function writeMarks(studentM) {
    const lines = studentM.map(function (studentMarks) {
        return studentMarks.name + ":" + studentMarks.mark;
    });
    const str = "nom;note\n" + lines.join("\n");
    console.log(str);
    (0, fs_1.writeFile)('data/marks.csv', str, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("notes sur myges");
    });
}
;
function writeAverag() {
    const str = (0, fs_1.readFile)("data/marks.csv", function (err, data) {
        if (err || !data) {
            console.error(err);
            return;
        }
        const str = data.toString();
        console.log(" w read complet " + str);
    });
    console.log("w rest writaverage " + str);
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