import {readFile as toto, writeFile} from "fs";
import {studentMarks} from "./studentMark";

toto("data/sample.txt", function (err:Error | null, data :Buffer) {// prend deux param le premier nom du fiechier et le callback
    if(err || !data){
        console.error(err);
        return;
    }
    const str = data.toString();
    console.log("read complet \n" + str);
});

console.log("read start" );

function writeMarks(studentM:studentMarks[]) {
    const lines = studentM.map(function (studentMarks: studentMarks) {
        return studentMarks.name + ":" + studentMarks.mark;
    })
    const str = "nom;note\n" + lines.join("\n");
    console.log(str);
    writeFile('data/marks.csv', str, function (err:Error | null){
        if(err){
            console.log(err);
            return;
        }
        console.log("notes sur myges");
    })
};

function writeAverag() {

    const str = toto("data/marks.csv",function (err:Error | null, data :Buffer) {
        if(err || !data) {
            console.error(err);
            return;
        }
        const str = data.toString();
        console.log(" w read complet " + str);
    });
    console.log("w rest writaverage " + str);
};

/*writeMarks([
    {name:"johnatan", mark:4},
    {name:"Aristide", mark:3},
    {name:"lucas", mark:9},
    {name:"theo", mark:20},
]);*/

writeAverag();
