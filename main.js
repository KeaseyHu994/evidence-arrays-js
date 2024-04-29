// Hunter Keasey
// 4/29/24
// JS Arrays EVIDENCE

//input
const firstName = "Hunter";
const lastName = "Keasey";

const AniMc = [
    " Asta",
    " Yuji",
    " Izuku",
    " Luffy"
];

let length = AniMc.length;

//out1
console.log(`***This script was produced by ${firstName} ${lastName} from Alba High***`);
console.log(`\n`);

//out2
console.log(`My MC array:${AniMc}`);
console.log(`Length of MC array: ${length}`);
console.log(`\n`);

//out3
AniMc.unshift(" Rimuru");
length = AniMc.length;
console.log(`Adding Rimuru using unshift( ) method:${AniMc}`);
console.log(`Length of MC array: ${length}`);
console.log(`\n`);

//out4
AniMc.push(" Saitama");
length = AniMc.length;
console.log(`Adding Saitama using push( ) method:${AniMc}`);
console.log(`Length of MC array: ${length}`);