// BigInt형
// 2^53-1 보다 크거나 -(2^53-1)보다 작은 정수
// 길이에 상관 없이 정수를 나타낼수 있다.

let big1 = 9007199254740991n; // 뒤에 n
let big2 = BigInt("9007199254740991"); // BigInt 함수로 표현.

// 숫자형 타입과 비슷하게 사칙연산 가능
let big3 = 10n;
let big4 = 5n;

console.log(big3 + big4); // 15

// string 문자열
let name1 = "gibeum"; // 큰 따옴표
let name2 = "gibeum"; // 작은 따옴표

// 문자열 안애 특정 변수에 저장된 값을 넣을 수 있다.
let name3 = `gibeum`; // 빽틱

let name4 = "gibeum";
let intro = `제 이름은 ${name4} 입니다.`; // 템플릿 리터럴

console.log(intro);

// boolean 자료형
// true, false

let isClicked = false; // 버튼이 클릭되었는지 안되었는지
let isOpen = true; // modal이 열렸는지 안열렸는지

// 불리언은 조건문에 자주 사용됨.
if (isClicked) {
  console.log("클릭O");
} else {
  console.log("클릭X");
}

// null형
// 오직 null 값만을 표현하는 자료형으로 사용
// null은 존재하지 않거나, 알수없는 값.

let name;
console.log(name); // null?? => undefined (변수에 값이 할당하지 않았을때.)
