# 인트아이 공식 홈페이지

> 인하대학교 정보통신공학과 프로그래밍 소모임 인트아이 공식 홈페이지

[![Node.js](https://img.shields.io/badge/node->=14.0.0-339933?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![Travis](https://img.shields.io/travis/com/int-i/int-i-official-site?logo=travisci&logoColor=white&style=for-the-badge)](https://travis-ci.com/int-i/int-i-official-site)

## 프로젝트 목적

> 기존 인트아이 질문톡방의 활용성이 저하되어, 좀 더 접근성이 좋은 익명 질문 공간을 만듦과 동시에 과거 존재했던 인트아이 코드 저장소를 다시 개발, 발전시켜 인트아이 회원들의 기술적 향상을 돕는 것을 목적으로 한다.

## 개발일지

2021-08-04 저장소 개설, travis ci 배지 추가

2021-08-05 server 작업 폴더 생성, package.json 스크립트 설정, client 생성(client readme 별도 작성)

2021-08-07 로컬 로그인 구현

2021-08-09 Oauth로그인 구현, 인트아이 멤버 DB 연동, 신규 멤버 추가 구현

2021-08-11 질문게시판 구현

2021-08-12 답글 구현

2021-08-13 도커 파일 도입 + 폴더 이름 변경 + 도커 컴포즈(개발환경) 도입 완료

## 시작하기 전

*pull 할 때마다 root경로 및 frontend경로에서 npm install 해줘야 함!*

server/config 폴더에 dev.js를 작성하고 시작 (gitignore)

## 백엔드 개발 스크립트
    npm run backend

## 프론트 개발 스크립트
    npm run frontend

## 도커 종합 환경 개발 스크립트
    docker-compose --env-file ./.env up
    
