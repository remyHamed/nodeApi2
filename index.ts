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

function writeAverag() {

    let str = toto("data/marks.csv",function (err:Error | null, data :Buffer) {
        if(err || !data) {
            console.error(err);
            return;
        }
        const str = data.toString();
        const lines = str.split('\n');
        let sum = 0;
        for (let i = 1; i < lines.length; i++ ) {
            const line = lines[i].split(":")
            const mark = parseInt(line[1]);
            sum += mark;
        }
        console.log("res" + sum/(lines.length - 1));
    });
};

/*writeMarks([
    {name:"johnatan", mark:4},
    {name:"Aristide", mark:3},
    {name:"lucas", mark:9},
    {name:"theo", mark:20},
]);*/

writeAverag();
