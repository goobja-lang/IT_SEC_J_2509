//npx ts-node --esm Day04.ts

// let a = 1; //let 선언하다 = 저장시키는 연산자
// a = 3;
// console.log(`a: ${a}`);

let a: number = 1; //내가 타입을 직접 지정함 이 방식을 많이 사용함
let b: string = "2"; //문자열이라고 지정함
let sum: number = 0; //이거는 숫자라고 지정한 것임
// sum=a+b;
/*
let a=1;
이건 들어오는 값에 따라서 타입이 자동으로 지정이 되요.

let a:number=1;
이건 내가 직접 타입을 정한 거에요.

let sum:number = 1+"2";
이런걸 막아줘요
*/
// let array1 = [1,2,3]; //어레이는 서랍 여러개 담을 수 있음
let array1: number[] = [1,2,3]; //이렇게도 가능함

// 과제 : 서랍번호 0번의 값을 5로 바꿔주세요.

array1[0] = 5;