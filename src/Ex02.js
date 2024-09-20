// 원시타입
// 숫자, Bigint, 문자, boolean, null, undefined, symbol
// 프로그램이 실행되는 도중에는 "단 하나"의 값만 갖고 있는 자료형
let number0 = 123;
number0 = "123"; // 원시 타입

// 비 원시 타입
// 객체, 함수, 배열
let array = [1, "2", 3]; // 비 원시 타입

// ------------------- 원시 타입--------------------------
// 숫자형

let number = 25;
number = 10.00123;
number = Infinity;
number = NaN;

// 숫자에 0을 나누면 무한대로.
let number1 = 10;
console.log(number1 / 0); //  Infinity

// 문자와 숫자 나누기 처럼. 나눌수 없는 값을 나누려 할때
let number2 = 10;
console.log("자바스크립트" / number2); // NaN

// 자바스크립트의 숫자 연산은 "안전하다".
