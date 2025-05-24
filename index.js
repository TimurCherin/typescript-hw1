// task 1
var age = 50;
var userName = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
// task 2
var anything;
anything = -20;
anything = 'Text';
anything = {};
// task 3
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// task 4
var person = ['Max', 21];
// task 5
var LoadStatus;
(function (LoadStatus) {
    LoadStatus[LoadStatus["LOADING"] = 0] = "LOADING";
    LoadStatus[LoadStatus["READY"] = 1] = "READY";
})(LoadStatus || (LoadStatus = {}));
var loaded = {
    status: LoadStatus.READY
};
// task 6
var strNum;
strNum = 'Hello';
strNum = 123;
// task 7
var enableDisable;
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
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
console.log(page1)
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
