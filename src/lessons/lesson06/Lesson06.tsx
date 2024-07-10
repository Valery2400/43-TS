import { log } from "console";

function Lesson06() {
  // 1. String

  let username: string = "Bob";
  username = "Harry";
  console.log(username);


// 2.number
let number: number = 42;
number = 7.1;
number = NaN;
number = 2 + Number('1')
console.log(number);;

// 3.boolean

let isAdmin : boolean = false
isAdmin = true
isAdmin = 2 > 3
console.log(isAdmin);

// * null / undefined

let emptyValue: null = null;
// emptyValue = 0
console.log(emptyValue);

let empty: undefined = undefined;
console.log(empty);

// * arrays

const colors: string[] = ['red', 'green', 'blue'];
// colors.push(1)
colors.push("");
colors[3] = 'yellow'
console.log(colors);

// * functions

const showMessage =(): void => {
    console.log('hello');
}

showMessage()

const sum = (a:number,b:number):number => {
    return a + b
}
console.log(sum(4,10));

// * objects interface

interface IUser {
    name: string,
    age: number|string,
    isCat: boolean
    hasOwner?: boolean;
}

interface IAnimal {
    name: string;
    kind: string;
}
const shark:IAnimal = {
  name: "Bobby",
  kind: "shark",
}

console.log(shark);

const tom:IUser = {
    name: 'Tom',
    age: 40,
    isCat: true,
    hasOwner: true,
}

const jerry:IUser = {
    name: 'Jerry',
    age: 35,
    isCat: false,
}

const userData: IUser[] = [tom,jerry];

console.log(userData);





  return (
    <div className="lesson-container">
      <h4>Lesson06</h4>
    </div>
  );
}

export default Lesson06;
