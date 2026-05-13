# Mission 02. 동기 / 비동기 처리 학습하기

## 1. 동기(Synchronous)란?

동기 처리는 작업이 순서대로 실행되는 방식이다.  
현재 작업이 끝날 때까지 다음 작업은 기다려야 한다.

즉, 하나의 작업이 끝나야 다음 코드가 실행된다.

예시:

```js
console.log("1번 작업");
console.log("2번 작업");
console.log("3번 작업");

실행 결과:

1번 작업
2번 작업
3번 작업

위 코드는 순서대로 실행된다.

2. 비동기(Asynchronous)란?

비동기 처리는 작업이 끝날 때까지 기다리지 않고 다음 코드를 먼저 실행하는 방식이다.

주로 시간이 오래 걸리는 작업에서 사용된다.

예시:

API 요청
파일 다운로드
타이머
데이터베이스 조회
console.log("시작");

setTimeout(() => {
  console.log("3초 후 실행");
}, 3000);

console.log("끝");

실행 결과:

시작
끝
3초 후 실행

setTimeout은 비동기 함수이기 때문에 3초를 기다리는 동안 다음 코드가 먼저 실행된다.

3. 왜 비동기 처리가 필요한가?

웹에서는 서버와 데이터를 주고받는 과정에서 시간이 걸린다.

만약 동기 방식만 사용하면 서버 응답이 올 때까지 웹 페이지가 멈추게 된다.

비동기 처리를 사용하면:

사용자 화면이 멈추지 않음
데이터를 기다리는 동안 다른 작업 가능
더 자연스러운 사용자 경험 제공 가능
4. 콜백 함수(Callback Function)

콜백 함수는 다른 함수의 매개변수로 전달되는 함수이다.

특정 작업이 끝난 뒤 실행하기 위해 사용한다.

예시:

function greet(name, callback) {
  console.log(name + "님 안녕하세요");
  callback();
}

function finish() {
  console.log("인사 완료");
}

greet("홍길동", finish);

실행 결과:

홍길동님 안녕하세요
인사 완료
5. 비동기와 콜백 함수

비동기 작업이 끝난 뒤 실행할 코드를 콜백 함수로 전달할 수 있다.

setTimeout(() => {
  console.log("작업 완료");
}, 2000);

2초 뒤에 콜백 함수가 실행된다.

6. 콜백 지옥(Callback Hell)

콜백 함수를 계속 중첩해서 사용하면 코드가 복잡해질 수 있다.

first(function () {
  second(function () {
    third(function () {
      console.log("끝");
    });
  });
});

이처럼 들여쓰기가 계속 깊어지는 문제를 콜백 지옥이라고 한다.

가독성이 떨어지고 유지보수가 어려워진다.

7. Promise

Promise는 비동기 작업의 성공 또는 실패를 처리하기 위한 객체이다.

콜백 지옥 문제를 해결하기 위해 사용된다.

Promise의 상태:

pending : 대기 상태
fulfilled : 성공 상태
rejected : 실패 상태

기본 형태:

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("성공");
  } else {
    reject("실패");
  }
});
8. then / catch

Promise의 결과를 처리할 때 사용한다.

fetch("API 주소")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
then() : 성공했을 때 실행
catch() : 실패했을 때 실행
9. async / await

async / await은 Promise를 더 쉽게 사용할 수 있도록 만든 문법이다.

코드를 동기 방식처럼 읽기 쉽게 작성할 수 있다.

async function getData() {
  try {
    const response = await fetch("API 주소");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
특징
async : 함수 앞에 붙여 비동기 함수 생성
await : Promise가 끝날 때까지 기다림
try / catch : 오류 처리 가능