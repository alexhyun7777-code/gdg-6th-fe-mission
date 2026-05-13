# Mission 03. fetch / axios 학습하기

## 1. HTTP 통신이란?

HTTP 통신은 클라이언트와 서버가 데이터를 주고받는 방식이다.

웹 브라우저(클라이언트)는 서버에 요청(Request)을 보내고, 서버는 응답(Response)을 반환한다.

예시:

- 게시글 목록 요청
- 로그인 요청
- 상품 데이터 요청
- 사용자 정보 요청

프론트엔드에서는 이러한 요청을 보내기 위해 `fetch` 또는 `axios`를 사용한다.

---

## 2. fetch란?

`fetch`는 JavaScript에서 기본적으로 제공하는 내장 함수이다.

별도의 설치 없이 바로 사용할 수 있으며, API 요청을 보낼 수 있다.

기본 형태:

```js
fetch("API 주소")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
동작 과정
fetch()로 서버에 요청
서버 응답(Response) 받기
response.json()으로 JSON 변환
데이터 사용
3. fetch GET 요청

GET 요청은 데이터를 조회할 때 사용한다.

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
4. fetch POST 요청

POST 요청은 데이터를 서버에 저장할 때 사용한다.

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "hello",
    body: "world",
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
주요 옵션
method : 요청 방식
headers : 요청 정보
body : 서버에 보낼 데이터
5. async / await와 fetch

async / await을 사용하면 더 읽기 쉽게 작성할 수 있다.

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
6. axios란?

axios는 API 요청을 쉽게 처리하기 위해 사용하는 외부 라이브러리이다.

fetch보다 기능이 더 많고 사용이 편리하다.

설치 방법:

npm install axios

사용 방법:

import axios from "axios";
7. axios GET 요청
import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response.data);
  });

axios는 자동으로 JSON 변환을 해주기 때문에 response.json()을 따로 작성하지 않아도 된다.

8. axios POST 요청
import axios from "axios";

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "hello",
    body: "world",
  })
  .then((response) => {
    console.log(response.data);
  });
9. async / await와 axios
import axios from "axios";

async function getData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}