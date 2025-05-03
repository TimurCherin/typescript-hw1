// task 1
let age: number = 50;
let userName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => { return 100 + a };

// task 2
let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// task 3
let some: unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
  str = some;
}

// task 4
let person: [string, number] = ['Max', 21];

// task 5
enum LoadStatus {
  LOADING,
  READY
}
const loaded = {
  status: LoadStatus.READY
};

// task 6
let strNum: string | number;
strNum = 'Hello';
strNum = 123;

// task 7
let enableDisable: 'enable' | 'disable';   
enableDisable = 'enable';

// task 8
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// task 9
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close'
};
