React 3주차 학습일지
왜 React가 필요한가

기존 HTML 방식은 협업하기 존나 힘든 구조임

여러명이 한 파일 작업하면 코드 겹침 발생
코드 길어질수록 유지보수 난이도 급상승
팀 규모 커질수록 더 심각해짐

→ 결국 “코드 관리 문제”

JS로 해결하려고 했던 시도

JS로 HTML 태그 직접 조작 가능함

태그 생성
데이터 넣기
HTML에 추가
다시 렌더링

근데 문제 있음

코드 개많아짐
가독성 조짐

→ 근본 해결은 x

DOM 개념

DOM은 HTML을 객체로 만든 구조

트리 구조 형태임
JS로 HTML 제어 가능하게 만든 시스템

태그 하나하나를 객체처럼 다룸

→ 결국 JS가 HTML을 “조작”하는 기반 구조임

React의 핵심 아이디어

HTML을 쪼개서 “부품화” 하자는 개념임
component = 재사용 가능한 UI 단위

예를 들면

Navbar 따로
Content 따로
Footer 따로

→ 협업 쉬워짐
→ 코드 재사용 가능

#5 JSX 등장

JS에 HTML을 넣어서 쓰고 싶었음

그래서 나온게 JSX

JS 문법 확장 느낌
실제로는 컴파일되어 JS로 변환됨

코드 가독성 확 올라감

→ “JS + HTML 합친 느낌”

SPA 개념

Single Page Application임

페이지 새로고침 없이 화면 변경됨
JS로 화면을 동적으로 바꿈

하나의 웹페이지 = 하나의 앱

→ 요즘 웹은 거의 다 이 구조임

React 실행 구조

기본 구조 핵심임

index.html → root 하나 있음
JS가 root에 App 넣음

index.html (root)
→ index.js
→ App 컴포넌트 렌더링

결국 HTML은 비어있고 JS가 채움

→ React는 “JS 기반 UI 렌더링 시스템”임

컴포넌트 구조

컴포넌트는 함수처럼 만듦

function App() {
  return <div></div>
}

import 해서 사용 가능

import Me from './Me';

<Me />

파일 단위로 분리 가능

→ 협업 구조 핵심

#9 실제 구조 흐름
App
 ├ Me
 ├ Father
 └ Dog

각각 따로 파일로 관리
App에서 조립

→ 레고처럼 조립하는 구조

React는 라이브러리임

프레임워크 아님

차이

라이브러리 → 필요한 것만 가져다 씀
프레임워크 → 구조 강제됨

React는 자유도 높음

React 생태계

React 하나로 끝 아님
Next.js
상태관리 라이브러리
기타 도구들

→ React 중심으로 확장

프론트는 조합형 구조다,,