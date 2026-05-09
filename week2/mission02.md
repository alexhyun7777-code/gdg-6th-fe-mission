
# 2주차 미션 - React Router & TailwindCSS

## 1. React Router 적용

React Router를 사용하여 페이지 이동 기능을 구현하였다.

기존에는 하나의 페이지에서만 화면이 구성되었지만,  
React Router를 적용하면서 URL에 따라 다른 페이지를 렌더링할 수 있게 되었다.

### 구현 내용

- `/` → 쇼핑몰 메인 페이지
- `/about` → 쇼핑몰 소개 페이지
- `/guide` → 이용 안내 페이지

버튼을 클릭하면 해당 경로로 이동하도록 `Link`를 사용하였다.

```jsx
<Link to="/about">쇼핑몰 소개</Link>
<Link to="/guide">이용 안내</Link>

## TailwindCSS 적용

TailwindCSS를 설치하고 프로젝트에 적용하였다.

기존 CSS 방식과 달리, className에 직접 스타일을 작성할 수 있어
빠르게 UI를 구성할 수 있었다.

사용 예시
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
  버튼
</button>
bg-blue-600 → 배경색
text-white → 글자색
px-4 py-2 → 여백
rounded-lg → 둥근 모서리

##TailwindCSS 테스트 컴포넌트

TailwindCSS를 활용하여 버튼 및 레이아웃을 구성하였다.

특히 페이지 이동 버튼과 레이아웃 정렬에 Tailwind를 적용하여
가독성과 UI를 개선하였다.