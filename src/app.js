import _ from "lodash";

let undefFromAfunction = _.max();

let notUndifFromAfunction = _.max([1, 3]);

console.log("The un should be ", undefFromAfunction);

console.log("hello");

let myName = "alex";

const greeting = "Hello";

console.log(myName, " ", greeting);

const simpleFxn = () => 1;

console.log((() => 2)());
