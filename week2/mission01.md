//CSS3의 레슨 1-9까지의 내용을 학습하고 정리해요.

# CSS3 Syntax (기본 문법)
구성 요소: 셀렉터(Selector), 프로퍼티(Property), 값(Value)으로 구성됩.

선언 방식: h1 { color: red; font-size: 16px; } 처럼 중괄호 안에 속성과 값을 세미콜론으로 구분하여 작성.

HTML 적용: 외부 스타일 시트(Link), 내부 스타일 시트(Style 태그), 인라인 스타일(style 어트리뷰트) 방식이 있으나, 관심사 분리를 위해 외부 스타일 시트 방식을 권장.

# Selector (셀렉터)
기본 셀렉터: 전체(*), 요소(태그명), ID(#), 클래스(.) 셀렉터가 있다.

어트리뷰트 셀렉터: [type="text"]와 같이 특정 속성을 가진 요소를 선택. ^=, $=, *= 등을 활용해 문자열 패턴 매칭도 가능.

가상 클래스(Pseudo-class): 요소의 특정 상태를 정의 (예: :hover, :active, :nth-child(n)).

가상 요소(Pseudo-element): 요소의 특정 부분에 스타일을 적용 (예: ::before, ::after).

# Units (단위)
절대 단위: px (화면 해상도에 따른 최솟값).

상대 단위:

%: 부모 요소와의 비율.

em: 요소 자신의 폰트 크기 기준 (중첩 시 계산이 복잡해질 수 있음).

rem: 최상위 요소(html)의 폰트 크기 기준 (반응형에 유리).

vh, vw: 뷰포트(브라우저 창)의 높이와 너비 기준.

# Box Model (박스 모델)
모든 HTML 요소는 사각형 박스로 표현.

구성: Content(실제 내용) → Padding(테두리 안쪽 여백) → Border(테두리) → Margin(테두리 바깥쪽 여백).

중요 설정: box-sizing: border-box;를 사용하면 패딩과 테두리를 포함해 전체 크기를 지정할 수 있어 레이아웃 계산이 훨씬 직관적.

# Display (디스플레이)
block: 줄바꿈이 일어나며 가로 전체 너비를 차지. (div, p, h1 등)

inline: 줄바꿈 없이 콘텐츠 크기만큼만 차지하며, 상하 마진/크기 지정이 제한. (span, a, img 등)

inline-block: 줄바꿈은 하지 않지만, block처럼 크기 및 마진 지정이 가능.

none: 요소를 렌더링하지 않고 공간도 차지하지 x.

# Position (포지션)
static: 기본값, 문서의 흐름에 따라 배치.

relative: static 위치를 기준으로 상하좌우 이동.

absolute: 부모 중 static이 아닌 요소를 기준으로 절대 좌표를 잡음.

fixed: 브라우저 화면(Viewport)을 기준으로 고정.

sticky: 스크롤 영역 내에서 특정 지점에 도달하면 고정.

# Float (플로트)
요소를 좌측(left) 또는 우측(right)으로 부유시켜 텍스트가 주변을 감싸게 한다.

주의사항: 부모 요소가 자식의 높이를 인식하지 못하는 문제가 발생할 수 있어, 반드시 clear: both나 clearfix 기법을 통해 해제해주어야 함.

# Background (배경)
background-image: 배경 이미지 경로 지정.

background-repeat: 반복 여부 (no-repeat, repeat-x 등).

background-size: 이미지 크기 조절 (cover는 빈틈없이 채우고, contain은 전체를 다 보여줌).

background-attachment: 스크롤 시 이미지 고정 여부 (fixed).

# Typography (타이포그래피)
font-family: 글꼴 지정 (마지막에 fallback 폰트를 작성하는 것이 관례).

font-size: 글자 크기.

font-weight: 굵기.

line-height: 줄 간격 (가독성에 큰 영향을 미침).

text-align: 정렬 (left, center, right, justify).

text-decoration: 밑줄, 취소선 등 설정.



// .css .module.css의 차이점과 사용법을 학습하고 정리해요.

React 프로젝트에서 스타일 충돌을 방지하기 위해 두 방식의 차이를 명확히 아는 것이 중요할것같다.

# 일반 .css 방식
사용법: import './Style.css';

특징: 빌드 시 모든 CSS 파일이 하나의 파일로 합쳐지며, 전역(Global) 범위를 갖음.

단점:

다른 컴포넌트에서 동일한 클래스 이름을 사용하면 스타일이 덮어씌워지는 네이밍 충돌이 발생.
규모가 커질수록 유지보수가 어렵다...

# CSS Module (.module.css) 방식
사용법: import styles from './Style.module.css'; 후 <div className={styles.container}>와 같이 사용.

특징:

지역(Local) 범위: 클래스 이름 뒤에 해시값(예: container_a1b2c)이 붙어 고유한 이름으로 자동 변환된다.
해당 컴포넌트 내에서만 유효하므로 이름 충돌 걱정이 없음.

장점: 

컴포넌트 단위의 독립적인 스타일링이 가능해져 React의 컴포넌트 기반 설계와 잘 맞는다.