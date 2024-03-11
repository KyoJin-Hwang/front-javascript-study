# NodeJS 설명

`by Kyojin Hwang`

## Node.js : Chrome V8 JavaScript 엔진으로 빌드된 Javascript 런타임

- 풀이 : 자바스크립트언어로 동작하는 컴퓨터 환경이다.

<br />

## 📚카테고리 (Category)
1. [설치](#1%EF%B8%8F⃣설치)
1. [NPM 개요](#2%EF%B8%8F⃣npm-개요)
1. [NPM 및 Package.json](#3%EF%B8%8F⃣npm-및-packagejson)

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
### 1. NPM ( Node Package Manager) 은 전세계의 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리.
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

### 3-2 NPM 본격적으로 사용해보기
```powershell
// init (초기화) 맨처음에 프로젝트 시작할때 사용한다.
npm init

npm init -y
```
여러 가지 질문에 답하면(옵션을 추가하면) **`package.json`** 파일을 작성한다.

각 질문을 넘어가면 기본값을 사용한다.

질문 없이 바로 시작하고 싶다면 **`-f`**(**`--force`**), **`-y`**(**`--yes`**) 중 하나의 플래그를 추가하는 것을 추천

만약  **`package.json`** 파일을 가지고 있다면, 먼저 그 파일을 읽고 난 후 옵션을 기본값으로 사용한다.



**[⬆ back to top](#카테고리-category)**

<br/>
