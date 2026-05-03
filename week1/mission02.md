#HTML5 레슨 2~6
#1.2 HTML이란 무엇인가

즉:

내용(Content)
구조(Structure)

를 담당

CSS는 꾸미기, JS는 동작
HTML은 “뼈대”

#2. HTML 문서의 기본 구조

HTML 문서는 항상 이 구조로 시작한다.

<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
내가 이해한 흐름
<!DOCTYPE html> → HTML5 문서 선언
<html> → 전체 문서 감싸는 루트
<head> → 설정 영역 (화면에 안 보임)
<body> → 실제 화면에 보이는 영역

눈에 보이는 건 전부 body 안

#3. 요소(Element)의 개념

HTML의 핵심은 “요소”다.

<h1>Hello</h1>

구조:

시작 태그 <h1>
내용 Hello
종료 태그 </h1>

HTML 문서는 이런 요소들의 집합이다

#4. 요소의 중첩 (Nested)

HTML은 트리 구조 느낌이다.

<body>
  <h1>제목</h1>
  <p>내용</p>
</body>

부모-자식 관계가 생김
구조를 표현하는 핵심 방식

그래서 들여쓰기(Indent)가 중요함

#5. 빈 요소 (Empty Element)

닫는 태그 없는 애들

<img />
<br />
<input />

content가 없음
속성만 가짐

React JSX에서도 많이 쓰니까 중요함

#6. 속성(Attribute)

요소에 추가 정보 붙이는 것

<img src="image.png" alt="이미지" />

구조:

속성명="값"

항상 시작 태그 안에 작성
요소의 기능을 확장하는 느낌

#7. HTML5에서 중요하게 느낀 점

HTML5에서 가장 중요한 변화:

시맨틱 태그 (Semantic)

예:

<header>
<nav>
section>
article>
footer>

단순 div가 아니라
“의미 있는 구조”를 표현함

장점:

가독성 ↑
유지보수 ↑
검색엔진 최적화 ↑

#1.3 시맨틱 요소와 검색엔진
#1 시맨틱 웹 개념

시맨틱 웹은 웹에 의미를 부여하는 것임

기존 웹은 데이터만 존재했는데
시맨틱 웹은 데이터에 의미 정보(메타데이터)를 추가함

이렇게 하면 단순 문서가 아니라
의미를 가진 정보 구조가 됨

#2 기존 웹의 문제점

기존 HTML은 사람이 읽기 위한 구조임

컴퓨터는 태그를 보긴 하지만
내용의 의미까지는 이해하지 못함

예:

<div>상품 목록</div>

사람이 보면 상품 목록인데
컴퓨터는 그냥 div 박스로만 인식함

#3 시맨틱 웹의 목적

시맨틱 웹은 이런 문제를 해결하려고 나옴

데이터를 단순 텍스트가 아니라
의미 기반 데이터로 바꾸는 것

이를 통해:

검색엔진이 정보 이해 가능
데이터 간 관계 파악 가능
#4 시맨틱 태그 개념

HTML5에서는 의미를 가진 태그를 제공함

태그 자체가 의미를 가짐

예:

<header>
<nav>
<article>
<footer>

각각 역할이 이미 정의되어 있음

#5 non-semantic 요소

의미 없는 태그

<div>
<span>

용도는 다양하지만
의미는 없음

단순 레이아웃 구성용

#6 semantic 요소

의미가 있는 태그

<header>   // 문서 머리
<nav>      // 메뉴
<section>  // 영역 구분
<article>  // 독립 콘텐츠
<aside>    // 보조 영역
<footer>   // 하단

구조와 역할이 명확하게 나뉨

#7 문서 구조 표현 방식 변화

기존:

<div id="header"></div>
<div id="nav"></div>
<div id="content"></div>
<div id="footer"></div>

HTML5:

<header></header>
<nav></nav>
<section></section>
<footer></footer>

id나 class로 의미 표현하던 걸
태그 자체로 표현하게 됨

#8 section vs article

section
= 주제별 영역 구분

article
= 독립적으로 사용 가능한 콘텐츠

#1.4 문서 형식 정의 (DOCTYPE)
<!DOCTYPE html>

이건 브라우저한테
“이 문서는 HTML5 형식임” 알려주는 역할

항상 문서 맨 위에 위치해야 함
HTML5 기준으로는 이 한 줄만 쓰면 됨

#2 html 태그
<html>
</html>

모든 HTML 요소의 부모임
문서 전체를 감싸는 루트

페이지에 딱 하나만 존재함
모든 태그는 html 안에 들어가야 함

<html lang="ko">

lang 속성으로 언어 지정 가능함

#3 head 태그
<head>
</head>
웹페이지의 메타 정보 영역임
화면에는 안 보이는 정보들 들어감
보통 포함되는 것들:

title
meta
link
style
script
#3.1 title 태그
<title>페이지 제목</title>

브라우저 탭에 표시되는 제목임

검색엔진에서도 중요하게 사용됨

#3.2 style 태그
<style>
  p { color: red; }
</style>

CSS를 HTML 안에서 직접 작성할 때 사용함
현재 페이지에만 적용됨

#3.3 link 태그
<link rel="stylesheet" href="style.css">

외부 CSS 파일 연결할 때 사용함
스타일 분리할 때 필수

#3.4 script 태그
<script src="app.js"></script>

JavaScript 연결하거나 직접 작성할 때 사용함
페이지 동작 담당

#3.5 meta 태그
<meta charset="utf-8">

문서 정보 설명하는 태그임
대표적으로:

문자 인코딩 설정
검색엔진 정보 제공
#4 body 태그
<body>
</body>

실제 화면에 보이는 모든 내용 들어감
텍스트, 이미지, 버튼 등 전부 여기 작성함
사용자 눈에 보이는 영역 = body

#5 전체 구조 흐름
<!DOCTYPE html>
<html>
  <head>
    <!-- 설정 -->
  </head>
  <body>
    <!-- 화면 -->
  </body>
</html>

위에서 아래 순서로 구성됨
역할 분리:

DOCTYPE → 문서 타입 선언
html → 전체 구조
head → 설정
body → 화면

#1.5 텍스트 관련 태그
#1 텍스트 태그 개요

HTML 콘텐츠 대부분은 텍스트로 구성됨
제목, 본문, 강조 등
텍스트 표현하는 태그들이 따로 존재함

#2 제목 태그 (Heading)
<h1> ~ <h6>

제목 표시용 태그임
h1이 가장 중요하고 글자도 가장 큼

숫자 커질수록 중요도 ↓

제목 아닌 곳에 쓰는 건 권장 안됨
검색엔진이 중요한 정보로 인식함

#3 글자 형태 태그 (Formatting)
#3-1 b
<b>텍스트</b>

단순히 굵게 표시
의미 없음

#3-2 strong
<strong>텍스트</strong>

굵게 표시 + 의미 있음
중요한 내용 강조

b랑 보이기는 같음
의미적으로는 다름

#3-3 i / em
<i>기울임</i>
<em>강조</em>

둘 다 기울임 표시

i → 그냥 스타일
em → 의미 있는 강조
#3-4 기타 텍스트 태그
<small>작은 글씨</small>
<mark>하이라이트</mark>
<del>삭제선</del>
<ins>밑줄</ins>
<sub>아래첨자</sub>
<sup>위첨자</sup>

각각 역할이 정해져 있음

#4 본문 태그
#4-1 p (단락)
<p>문장</p>
문단 나눌 때 사용
자동으로 줄 간격 생김

#4-2 br (줄바꿈)
<br>

줄만 바꿈
닫는 태그 없음

여러 개 써도 줄 단위로만 처리됨

#4-3 hr (구분선)
<hr>

수평선 생성
내용 구분할 때 사용

#5 공백 처리
&nbsp;

공백 하나 생성
HTML은 기본적으로 공백 여러 개 무시함
그래서 따로 써줘야 함

#6 pre 태그
<pre>
코드 그대로 출력
</pre>

작성한 그대로 출력됨
줄바꿈, 공백 유지됨

#7 인용 태그
#7-1 q
<q>짧은 인용</q>

짧은 문장 인용

#7-2 blockquote
<blockquote>
긴 인용
</blockquote>

긴 문장 블록 인용
들여쓰기 형태로 표시됨

#8 전체 흐름 느낌
텍스트 구성

→ 제목 (h1~h6)
→ 글자 스타일 (b, strong, em 등)
→ 본문 (p, br, hr)
→ 공백 처리 (&nbsp;)
→ 그대로 출력 (pre)
→ 인용 (q, blockquote)

1.6 HTML의 핵심 개념인 Hyperlink
#1 하이퍼링크 개념

HTML의 핵심 기능 중 하나가 하이퍼링크임

한 문서에서 다른 문서로 이동 가능하게 하는 기능임
텍스트를 “연결된 구조”로 만드는 개념임

사용자가 원하는 정보로 바로 이동 가능함

#2 a 태그 (anchor)
<a href="http://www.google.com">Visit google</a>

링크 기능 담당 태그임
HTML에서 링크는 전부 이걸로 만든다고 보면 됨

클릭하면 다른 페이지로 이동함

#3 href 속성
<a href="경로">링크</a>

이동할 위치(주소)를 지정하는 속성임
링크의 핵심 요소임

파일 위치를 “경로(path)”로 지정함

#4 디렉터리 개념

파일 위치 이해하려면 디렉터리 구조 알아야 함

루트 디렉터리 → 최상위
홈 디렉터리 → 사용자 영역
현재 디렉터리 → ./
부모 디렉터리 → ../
 링크 경로 계산할 때 사용됨

#5 파일 경로 종류
절대경로
<a href="http://example.com/index.html">

전체 주소 다 씀
어디서든 동일하게 접근 가능

상대경로
<a href="./index.html">
<a href="../img/test.png">

현재 위치 기준으로 이동

폴더 구조에 따라 달라짐

#6 내부 이동 (앵커 이동)
<h2 id="top">상단</h2>
<a href="#top">위로 이동</a>

같은 페이지 안에서 이동 가능
#id 형태로 연결함

#7 target 속성
<a href="https://google.com" target="_blank">

링크 클릭 시 어떻게 열지 결정함

_self → 현재 창 (기본값)
_blank → 새 탭

새 창 열 때 자주 사용됨

#8 rel 속성 (보안 관련)
<a href="..." target="_blank" rel="noopener noreferrer">

외부 사이트 열 때 보안 문제 방지용

악성 페이지 접근 방지 역할 있음

#9 전체 흐름
링크 개념 (하이퍼링크)
→ a 태그 사용
→ href로 이동 경로 지정
→ 경로는 절대/상대 있음
→ 내부 이동은 #id 사용
→ target으로 열리는 방식 결정
→ rel로 보안 설정

#javascript 레슨 5~8
#5.5 자바스크립트 기본문법
#변수 > 값 저장, 그 저장된 값 참조위해 사용. 값이 유지 할 필요 있는 값이면 변수에 담아사용. 가독성 좋아짐.
변수는 위치 즉 주소를 기억. 메모리상의 주소. 변수는 언어로 지정한 식별자임. 변수 선언시 var 이용, = 은 변수에 값 할당위해 사용.
#값
var str = 'Hello World'
변수 선언, 문자열 리터럴로 값할당. 
// 숫자 리터럴
10.50
1001

// 문자열 리터럴
'Hello'
"World"

// 불리언 리터럴
true
false

// null 리터럴
null

// undefined 리터럴
undefined

// 객체 리터럴
{ name: 'Lee', gender: 'male' }

// 배열 리터럴
[ 1, 2, 3 ]

// 정규표현식 리터럴
/ab+c/

// 함수 리터럴
function() {}
이런 느낌으로 숫자, 문자열, 불리언 같은 타입 리터럴은 다양한 연산자 피연선자 되어 하나의 값으로 평가. 즉 리터럴은 연산에 의해 하나의 값 될수있다.
원시 타입 (primitive data type)
number
string
boolean
null
undefined
symbol (New in ECMAScript 6)
객체 타입 (Object data type)
object
#연산자
잘 알기때문에 패스,, 암시적 명시적 형변환 기능~
#키워드
키워드는 수행할 동작 규정하는것. ex var 키워드는 새로운 변수 생성할 것 지시.
#주석
// 로 작성 과도한 주석은 가독성 똥망
#문
각각의 명령을 문(statement)이라 하며 문이 실행되면 무슨 일인가가 일어나게 된다.
문은 리터럴, 연산자(Operator), 표현식(Expression), 키워드(Keyword) 등으로 구성되며 세미콜론( ; )으로 끝나야 한다.
문들은 일반적으로 위에서 아래로 순서대로 실행된다. 이러한 실행 순서는 조건문(if, switch)이나 반복문(while, for)의 사용으로 제어할 수 있다 이를 흐름제어(Control Flow)라 함. 함수 호출로 변경가능. 다른 언어랑은 다르게 자바스크립트에서는 블록 유효범위 생성 x. 함수 단위의 유효범위만 생성.
#표현식
값(리터럴), 변수, 객체의 프로퍼티, 배열의 요소, 함수 호출, 메소드 호출, 피연산자와 연산자의 조합은 모두 표현식이며 하나의 값으로 평가됨. 
// 표현식
5             // 5
5 * 10        // 50
5 * 10 > 10   // true
(5 * 10 > 10) && (5 * 10 < 100)  // true
#함수
function으로 함수정의~
#객체
자바스크립트는 객체기반 스크립트 언어. 자바스크립트 이루고있는 거의 모든것 객체. 원시타입 제외한 나머지 값들은 모두 객체.
#배열
[]로 표현, 얘도 객체,,
#데이터 타입과 변수
자바 경우 동적 타입 언어. 변수 타입 지정 없이 값 할당 과정에서 자동으로 변수 타입 결정. 즉 변수는 고정된 타입 x. 같은 변수에 여러 타입 값 자유롭게 할당가능.
#데이터 타입
원시 타입 (primitive data type)
boolean
null
undefined
number
string
symbol (ES6에서 추가)
객체 타입 (object/reference type)
object
자바스크립트에서 제공하는 7개의 데이터 타입은 크게 원시 타입(primitive data type)과 객체 타입(object/reference type)으로 구분
원시타입은 변경 불가능값, pass by value
number c,자바경우랑 다르게. 자바스크립트는 독특하게 하나의 숫자타입만 보유. 64비트 부동소수점 형(double-precision 64-bit floating-point format : -(253 -1) 와 253 -1 사이의 숫자값)을 따른다.2진수, 8진수, 16진수 리터럴은 메모리에 동일한 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다. 자바스크립트는 2진수, 8진수, 16진수 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 모두 10진수로 해석. 자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고 모든 수를 실수를 처리.정수로 표시된다해도 사실은 실수다. 따라서 정수로 표시되는 수 끼리 나누더라도 실수가 나올 수 있다.
Infinity : 양의 무한대
-Infinity : 음의 무한대
NaN : 산술 연산 불가(not-a-number)
#string
자바스크립트 문자열은 원시 타입이고 변경 불가능. 한 번 문자열 생성, 문자열 변경할 수 없다는것 의미.
#boolean
true flase 뿐
#undefined
이건 얘가 유일. 할당하지 않은 변수는 이값 가짐. null 이랑 뭔 차이? 엔진에 의해 초기화된 값. 의도적으로 할당할경우? 이경우는 본래 취지와 어긋, 혼란 줄 수있어서 의도적 할당엔 null 사용
#null
null 타입 연산자로 연산해보면 object 가 나옴. 이건 자바스크립트 설계 오류, 즉 타입 확인시 typeof 노노, 일치 연산자 === 사용.
#symbol
ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값.
#객체 타입
모든 것이객체,,

#5.7 연산자
#1. 표현식과 연산자

표현식(expression) = 실행하면 하나의 값이 되는 코드.

10
x
10 + 20
square()

10 + 20에서 +가 연산자, 10, 20이 피연산자임.
연산자는 피연산자를 이용해서 새로운 값을 만든다.

#2. 산술 연산자

숫자 계산할 때 사용.

5 + 2 // 7
5 - 2 // 3
5 * 2 // 10
5 / 2 // 2.5
5 % 2 // 1

%는 나머지임.

#3. 증가/감소 연산자
let x = 5;

x++; // 나중에 증가
++x; // 먼저 증가
x--; // 나중에 감소
--x; // 먼저 감소

시험/실습에서 제일 헷갈리는 부분:

let x = 5;
let result = x++;

console.log(result); // 5
console.log(x);      // 6

후위 x++는 먼저 현재 값을 쓰고, 그다음 증가.

let x = 5;
let result = ++x;

console.log(result); // 6
console.log(x);      // 6

전위 ++x는 먼저 증가하고, 증가된 값을 사용.

#4. 문자열 연결 연산자 +

+는 숫자끼리면 덧셈인데, 문자열이 끼면 문자열 연결이 됨.

1 + 2       // 3
'1' + 2     // '12'
'1' + '2'   // '12'

주의:

1 + true      // 2
1 + false     // 1
1 + null      // 1
1 + undefined // NaN

JS가 자동으로 타입을 바꾸는 경우가 있음. 이걸 암묵적 타입 변환이라고 함.

#5. 할당 연산자

변수에 값을 넣는 연산자.

let x = 10;

x += 5; // x = x + 5
x -= 5; // x = x - 5
x *= 5; // x = x * 5
x /= 5; // x = x / 5
x %= 5; // x = x % 5

중요한 점:

let x, y;
y = x = 10;

오른쪽부터 실행돼서 x = 10, 그다음 y = 10.

#6. 비교 연산자

결과가 true 또는 false.

5 > 3  // true
5 < 3  // false
5 >= 5 // true
5 <= 4 // false

가장 중요:

5 == '5'  // true
5 === '5' // false
== : 값만 비교, 타입 자동 변환 있음
=== : 값과 타입 둘 다 비교

실전에서는 거의 무조건 === 쓰는 게 안전. ==는 예측하기 어려운 결과가 나올 수 있다고 설명한다.

#7. NaN 주의
NaN === NaN // false

NaN은 자기 자신과도 같지 않음.

확인할 때는:

isNaN(NaN) // true
#8. 삼항 조건 연산자

형태:

조건식 ? 참일 때 값 : 거짓일 때 값

예시:

let x = 2;
let result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수

왜 짝수냐?

2 % 2 // 0

0은 false처럼 취급됨. 그래서 뒤쪽 '짝수'가 선택됨.

#9. 논리 연산자
true || false // true
true && false // false
!true         // false
!false        // true

의미:

연산자	의미
`	
&&	AND, 둘 다 참
!	NOT, 반대로 바꿈

주의:

'Cat' && 'Dog' // 'Dog'

&&, ||는 항상 boolean만 반환하는 게 아니라, 피연산자 중 하나를 반환할 수 있음.

#10. 쉼표 연산자

왼쪽부터 실행하고 마지막 값을 반환.

let x, y, z;
x = 1, y = 2, z = 3; // 결과는 3

많이 쓰진 않음.

#11. 그룹 연산자 ()

우선순위 올릴 때 사용.

10 * 2 + 3   // 23
10 * (2 + 3) // 50
#12. typeof 연산자

값의 타입을 문자열로 알려줌.

typeof 'hi'      // "string"
typeof 1         // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof []        // "object"
typeof {}        // "object"
typeof function() {} // "function"

주의:

typeof null // "object"

null 확인은 이렇게 해야 함:

value === null

typeof null은 JS의 오래된 설계 문제 때문에 "object"가 나옴.

#5.8 제어 흐름이란?

기본적으로 JavaScript 코드는 위에서 아래로 순서대로 실행된다.
이걸 순차 실행이라고 한다.

하지만 실제 프로그램에서는:

조건에 따라 다르게 실행하거나
반복해서 실행하거나
중간에 흐름을 끊어야 한다

이런 걸 가능하게 하는 게 제어문(Control Flow)이다.

#2. 블록문 (Block)

제어문을 이해하려면 먼저 블록 개념이 중요하다.

{
  let x = 10;
  console.log(x);
}

{} 안은 하나의 묶음
여러 문장을 하나의 단위로 실행

if, 반복문, 함수는 거의 다 블록을 사용함

#3. 조건문 (if / else)
기본 구조
if (조건) {
  실행코드
} else {
  실행코드
}

조건이 true면 실행, false면 건너뜀

내가 이해한 핵심

조건문은 “갈림길”이다

let num = 10;

if (num > 0) {
  console.log("양수");
}

조건이 맞을 때만 실행됨

여러 조건
if (num > 0) {
  // 양수
} else if (num < 0) {
  // 음수
} else {
  // 0
}

위에서부터 순서대로 검사
처음 true 되는 것만 실행

#4. switch 문

if문이 많아지면 switch 사용

let day = 2;

switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  default:
    console.log("기타");
}
핵심 포인트

break 없으면 계속 실행됨

case 1:
case 2:

이런 식으로 묶는 것도 가능

#5. 반복문 (for / while / do while)
(1) for문
for (let i = 0; i < 5; i++) {
  console.log(i);
}

반복 횟수가 정해져 있을 때 사용

구조:

초기값; 조건; 증가
(2) while문
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

조건이 true인 동안 계속 실행

(3) do while문
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

무조건 한 번은 실행됨

#6. break 문

반복문이나 switch에서 탈출

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i);
}

i가 3이면 반복 종료

#7. continue 문

현재 반복만 건너뜀

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

2는 출력 안 됨

#8. 전체 흐름 정리 (진짜 핵심 느낌)

오늘 공부하면서 느낀 흐름은 이거다:

기본 → 순차 실행

필요하면
→ if (조건 분기)
→ switch (여러 선택)
→ 반복문 (반복 실행)

그리고 중간 제어
→ break (끝내기)
→ continue (건너뛰기)