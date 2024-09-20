// 변수
let color1 = "skyblue";
color = "yellow";
console.log(color);

let iscatordog;

// 카멜 표기법
let isCoatOrDog;

// 자바스크립트 변수는 값이 바뀔때마다 바뀐 값의 자료형을
// 변수의 자료형으로 갖는 동적타입을 지원한다.
let nowType = "안녕하세요";
console.log(typeof nowType); // string 문자형

nowType = 100;
console.log(typeof nowType); // number 숫자형

// 상수 = 변하지 않는 변수.
const color2 = "skyblue";
// color2 = "yellow";

console.log(color2);
// index.js:20 Uncaught TypeError: Assignment to constant variable.
// at index.js:20:8

// 상수를 사용하는 이유
// 1. 변경될 수 없다고 확신하는 값
const BIRTH = "08-29";
const NAME = "gibeum";

// 2. 기억하기 어려운 예약어
const GITHUB_URL = "https://github.com/meustar";
const VELOG_URL = "https://velog.io/@meustar829";
