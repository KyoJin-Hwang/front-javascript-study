# NodeJS 설명

`by Kyojin Hwang`

## Node.js : Chrome V8 JavaScript 엔진으로 빌드된 Javascript 런타임

- 풀이 : 자바스크립트언어로 동작하는 컴퓨터 환경이다.

<br />

## 📚카테고리 (Category)
1. [설치](#1%EF%B8%8F⃣설치)
1. [NPM 개요](#2%EF%B8%8F⃣npm-개요)
   1. [NPM이란](#2-1-npm--node-package-manager-은-전세계의-개발자들이-만든-다양한-기능패키지-모듈들을-관리)
1. [NPM 및 Package.json](#3%EF%B8%8F⃣npm-및-packagejson)
   1. [노드버전 및 사용방법](#3-1-노드-버젼-및-사용방법)
   2. [NPM 본격적으로 사용해보기](#3-2-npm-본격적으로-사용해보기)
   3. [NPM Install](#3-3-npm-install)
   4. [예제: Parcel 설치해보기](#3-3-예제로-parcel-설치해보기)
   5. [gitignore](#3-4-gitignore)

<br/>

# 1️⃣설치
![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/0e7ce234-32e3-4740-b1fb-3cb5db5e9ebc)
![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/640570e8-029c-4209-b69c-7aa3920dd535)

LTS(Long Term Support)란? 말 그대로 장기 `지원되는 버전` 을 의미한다
- 안정적이며 신뢰도를 보장한다.
- LTS가 최고다❗❗

**[⬆ back to top](#카테고리-category)**

<br/>

# 2️⃣NPM 개요
### 2-1 NPM ( Node Package Manager) 은 전세계의 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리.
- yarn, npm 등 모듈이나 기능을 다운받을 수 있다. ( ex) npm install parcel )
- 규모 있는 프로젝트와 협업을 위해서 사용된다. 

**[⬆ back to top](#카테고리-category)**

<br/>

# 3️⃣npm 및 package.json
### 3-1 노드 버젼 및 사용방법
```powershell
// 현재 적용중인 노드 버젼을 확인할 수 있다. 
node --version || node -v 

// 현재 적용중인 npm의 버젼을 확인할 수 있다.
npm --version || npm -v

// 다운로드된 노드버젼 확인 
nvm list

// 노드를 적용할때 는 powershell || git bash || terminal 등을 
// 관리자모드로 하여 사용한다 
nvm use 16.18.0

// 터미널 Clean 하게 지우는 법
macOS => Cmd + k
Windows => clear 
```
![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/87f3a2a4-66ee-4869-b584-4fd60377b2a6)

**[⬆ back to top](#카테고리-category)**
<hr/>

### 3-2 NPM 본격적으로 사용해보기
```powershell
// init (초기화) 맨처음에 프로젝트 시작할때 사용한다.
npm init

npm init -y
```
여러 가지 질문에 답하면서(옵션을 추가하면) **`package.json`** 파일을 작성한다.

각 질문을 넘어가면 기본값을 사용한다.

질문 없이 바로 시작하고 싶다면 **`-f`**(**`--force`**), **`-y`**(**`--yes`**) 중 하나의 플래그를 추가하는 것을 추천

만약  **`package.json`** 파일을 가지고 있다면, 먼저 그 파일을 읽고 난 후 옵션을 기본값으로 사용한다.

**[⬆ back to top](#카테고리-category)**
<hr/>

### 3-3 NPM Install
```powershell
// npm i || npm install
// package.json , lock.json 에 있는 모듈을 다운받는다 
npm i 

// npm install 과 npm i 는 같다 

npm i lodash

```
![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/93796423-78f9-4b12-bbba-d6dc75d82910)
![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/aafa7579-d890-4d08-b74d-6379ea761fab)

- node_modules 와 package-lock.json 이 생긴다
- npm i lodash 설치한  `lodash` 는 node_modules 안에 들어 가 있다.

**[⬆ back to top](#카테고리-category)**
<hr/>

### 3-3 예제로 Parcel 설치해보기 

❗❗ 잠깐 Parcel 시작하기전 뜬금없지만 번들러란? 알고있는가? 

`번들러 (Bundler) ?`

- 여러 가지 패키지들을 실제 웹사이트에 올라갈 수 있도록 묶어주는 역할
- Webpack, Borserify, Parcel 대표적으로 이렇게 있다.
- 웹사이트에서 직접적으로 동작하지 않는다.  그래서 `—save -dev` 라는 플래그를 붙여준다

```powershell
npm i parcel --save-dev
npm i --save-dev parcel 

--save-dev 앞 뒤 위치상관없음
```
![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/93f44139-1b6d-49ab-b524-c329cc973e6d)
- dependencies에는 애플리케이션 동작과 직접적으로 연관된 라이브러리를 설치하고 ( 실제 브라우저에서 배포해서도 작동 ) 
- devDependencies에는 개발할 때 필요한 라이브러리를 설치한다. ( 개발용 ) 

**[⬆ back to top](#카테고리-category)**

<br/>

### 3-4 .gitignore
```powershell
// 깃이그노어 생성
touch .gitignore 
```
 
`이그노어 생성이유 ?`
- npm i 로 node_modules 를 언제나 생성할 수 있기 때문에

![image](https://github.com/KyoJin-Hwang/front-javascript-study/assets/84490050/7fda1361-034b-46df-a0eb-218de3036d12)

- 버전관리 하지 않을  경우 

**[⬆ back to top](#카테고리-category)**

<br/>


