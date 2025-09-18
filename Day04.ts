//npx ts-node --esm Day04.ts
//오늘 수업은 타입스크립트임

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

array1[0] = 5; //정답
// console.log(`array1: ${array1}`);

array1 = [5]; //서랍을 교체한다는 의미
console.log(`array1: ${array1}`);

let jsObject = { a: 1, b: 2 };
console.log(`jsObject: `, jsObject);
console.log(`jsObject a: `, jsObject.a);
console.log(`jsObject b: `, jsObject.b);

// 지금 이거 해독하지 마세요
// let 내쇼핑몰 = [{ "제품": "멍멍이", "가격": "500" }, { "제품": "타이거", "가격": "5000" }]

let js1: any; // 아무것이나 다 담을 수 있음 - 어려운 것 할때 쓴다 gpt 코딩어 활용할 때
js1=1;
js1="dfes"
js1={}
js1=[]

/*
any 라는 타입은, javascript, python같이
아무거나 다 담을수 있어요.
쇼핑몰 상품 올리기하기전 이미지 미리보기같은 어려운 기능,
혹은 gpt한테 어려운 기능을 대리 맡길때 쓰는 타입이다 라고 생각 하세요
 */


