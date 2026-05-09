# mission03

## React Hooks 공부 정리

### 1. React란?

React는 Facebook에서 만든 JavaScript 라이브러리임.  
복잡한 화면을 컴포넌트 단위로 나눠서 관리하기 위해 등장함. :contentReference[oaicite:0]{index=0}

기존에는 DOM을 직접 계속 조작해야 했음.  
하지만 DOM 조작이 많아질수록 브라우저 성능이 떨어짐. :contentReference[oaicite:1]{index=1}

그래서 React는 Virtual DOM을 사용함.  
가상의 DOM에서 먼저 변경 사항을 계산한 뒤 필요한 부분만 실제 DOM에 반영함. :contentReference[oaicite:2]{index=2}

React의 핵심 특징은 컴포넌트 기반 구조임.  
화면을 여러 개의 작은 부품(Component)으로 나눠서 개발함. :contentReference[oaicite:3]{index=3}

---

## 2. props와 state

### props

props는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 값임.  
읽기 전용 데이터 느낌임.

예시.

```jsx
<CountNumber count={count} />

자식 컴포넌트에서는 아래처럼 받음.

function CountNumber(props) {
  return <h2>{props.count}</h2>;
}

상위 컴포넌트의 state 값이 바뀌면
하위 컴포넌트도 다시 렌더링.

state

state는 컴포넌트 내부에서 관리하는 데이터임.
값이 변경되면 화면도 다시 렌더링됨.

예시로 count 값 관리 가능함.

const [count, setCount] = useState(0);

count는 현재 상태값임.
setCount는 상태를 변경하는 함수임.

3. React Hook

Hook은 함수형 컴포넌트에서도 state나 생명주기 기능을 사용할 수 있게 해주는 기능임.

React 16.8부터 등장함.

Hook 이름은 전부 use로 시작함.

예시.

useState
useEffect
useNavigate

함수형 컴포넌트의 단순함은 유지하면서
클래스형 컴포넌트 기능도 사용할 수 있게 해줌.

useState
useState란?

컴포넌트의 상태(state)를 저장하고 변경할 수 있게 해주는 Hook임.

기본 형태.

const [state, setState] = useState(초기값);

예시.

const [count, setCount] = useState(0);

count는 현재 숫자 상태임.
setCount는 count 값을 변경하는 함수임.

useState 사용 예시
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  );
}

버튼을 누르면 setCount가 실행됨.
state가 변경되면서 화면도 다시 렌더링됨.

useEffect
useEffect란?

컴포넌트가 렌더링될 때 특정 작업을 실행하는 Hook임.

대표적으로 사용되는 경우.

서버 데이터 불러오기.
상태 변경 감지.
이벤트 등록.
타이머 실행.
정리(clean up) 작업.

컴포넌트 생명주기와 관련이 깊음.

React 컴포넌트 생애주기는 크게 3단계임.

Mount.
Update.
UnMount.

useEffect는 이런 생명주기 상황에서 작업을 실행함.

useEffect 기본 형태
useEffect(() => {
  실행할 코드;
}, []);

[]는 의존성 배열임.

실행 방식
1. 처음 한 번만 실행
useEffect(() => {
  console.log("처음 실행");
}, []);

컴포넌트가 처음 생성될 때만 실행됨.

2. 특정 값이 바뀔 때 실행
useEffect(() => {
  console.log("count 변경됨");
}, [count]);

count 값이 바뀔 때마다 실행됨.

3. 렌더링마다 실행
useEffect(() => {
  console.log("렌더링");
});

렌더링될 때마다 계속 실행됨.

useNavigate
useNavigate란?

React Router에서 제공하는 Hook임.
페이지 이동 기능을 담당함.

다른 페이지로 이동할 때 사용함.

사용 방법
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function movePage() {
    navigate("/mypage");
  }

  return <button onClick={movePage}>이동</button>;
}

버튼 클릭 시 "/mypage"로 이동함.