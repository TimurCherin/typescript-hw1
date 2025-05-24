"use strict";
// task 1
let age = 50;
let userName = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a; };
// task 2
let anything;
anything = -20;
anything = 'Text';
anything = {};
// task 3
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
// task 4
let person = ['Max', 21];
// task 5
var LoadStatus;
(function (LoadStatus) {
    LoadStatus[LoadStatus["LOADING"] = 0] = "LOADING";
    LoadStatus[LoadStatus["READY"] = 1] = "READY";
})(LoadStatus || (LoadStatus = {}));
const loaded = {
    status: LoadStatus.READY
};
// task 6
let strNum;
strNum = 'Hello';
strNum = 123;
// task 7
let enableDisable;
enableDisable = 'enable';
// task 8
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
