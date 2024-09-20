// 연산자
// 1. 산술 연산자 (+, -, *, /, %)

let num1 = 10;
let num2 = 5;

console.log(num1 + num2); // 15
console.log(num1 - num2); // 5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 2
console.log(num1 % 2); // 0
console.log(num2 % 2); // 1

// 2. 증감 연산자
// 후위 연산자, 전위 연산자

// 증가 (++)
let num3 = 10;
console.log(num3++); // 후위 연산 -> 10
console.log(num3); // 현재 num 값 -> 11
console.log(++num3); // 전위 연산 -> 12

console.log("========================");

// 감소 (--)
let num4 = 10;
console.log(num4--); // 후위 연산 -> 10
console.log(num4); // 현재 num 값 -> 9
console.log(--num4); // 전위 연산 -> 8

// 3. 대입 연산자 (=)

let num5 = 20;
num5 = num5 + 5; // 복합 대입 연산자로 num5 += 5 와 같다.

console.log(num5);

// 4. 복합 대입 연산자 (+=, -=, *=, /=, %=)
let num6 = 20;

console.log((num6 += 5));
console.log((num6 -= 5));
console.log((num6 *= 5));
console.log((num6 /= 5));
console.log((num6 %= 5));

// 5. 논리 연산자
// 5.1 NOT 연산자 (!)
let isOpen = false;
let isClicked = true;

console.log(!isOpen); // true
console.log(!isClicked); // false

// 5.2 OR 연산자 (||)
let a = true || true; // true
let b = true || false; // true
let c = false || true; // true

let d = false || false; // false

console.log(a, b, c, d);

// 5.3 AND 연산자 (&&)
let e = true && true; // true

let f = true && false; // false
let g = false && true; // false
let h = false && false; // false

console.log(e, f, g, h);

// 6. 비교 연산자
// 일치 (===, ==)
let num7 = 10;
let num8 = "10";

console.log(num7 === num8); // false (값과 자료형까지 비교)
console.log(num7 == num8); // true (값만 비교)

// 불일치 (!==, !=)
let num9 = 10;
let num10 = "10";

console.log(num7 !== num8); // true (값과 자료형까지 비교)
console.log(num7 != num8); // false (값만 비교)

// 7. 대소 비교 연산자
let i = 10;
let j = 20;
let k = 10;

console.log(i < j); // true
console.log(i > j); // false
console.log(j >= k); // true
console.log(j > k); // true
console.log(i <= k); // true
console.log(i > k); // false

// 8. 연결 연산자 (+)
let l = "안녕";
let m = "자바스크립트";

console.log(l + m); // 안녕자바스크립트

// 9. null 병합 연산자
// 변수의 값이 null 이거나 undefined 일 경우 (??) 기준 오른쪽 값을 반환.
// 반대로 변수의 값이 null이나 undefined가 아닐 경우 ?? 왼쪽 값 반환.
let num11;
num11 = num11 ?? 20;

console.log(num11); // 20

// 10. 삼항 연산자
// A ? B : C
// A 조건식이 참일 경우 B를, 거짓일 경우 C를 반환.

let num12 = 100;

console.log(num12 % 2 === 0 ? "짝수" : "홀수");
