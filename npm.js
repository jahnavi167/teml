//nom allows us to reuse the code written by other developer
//and also reuse our  code in other devices
//sharable javascript code
//anyone can public anythig
//npm --version


//local dependency -use it only in the particular project
//npm i <packagename>

//global dependency-use it in any project
//npm install -g <packagename>
//sudo npm install -g <packagename> (mac)

//npm init (step by step enter to skip)
//npm init-y (everything default)

const _=require('lodash');
const items=[1,[2,[3,4,[5,6]]]]
const newitems=_.flattenDeep(items)
console.log(newitems)