[![Build Status](https://travis-ci.com/int-i/int-i-official-site.svg?branch=master)](https://travis-ci.com/int-i/int-i-official-site)
# 인트아이 공식 홈페이지

## 프로젝트 목적
> 기존 인트아이 질문톡방의 활용성이 저하되어, 좀 더 접근성이 좋은 익명 질문 공간을 만듦과 동시에 과거 존재했던 인트아이 코드 저장소를 다시 개발, 발전시켜 인트아이 회원들의 기술적 향상을 돕는 것을 목적으로 한다.

## 개발일지
2021-08-04 저장소 개설, travis ci 배지 추가

2021-08-05 server 작업 폴더 생성, package.json 스크립트 설정, client 생성(client readme 별도 작성)
- nodemon을 사용하는 스크립트에서 오류가 발생하는 분은 nodemon을 글로벌로 설치하시기바랍니다.

## 시작하기 전

*pull 할 때마다 root경로 및 client경로에서 npm install 해줘야 함!*

server/config 폴더에 dev.js를 작성하고 시작 (gitignore)

## 백엔드 개발 스크립트
    npm run backend

그냥 npm run start를 할 경우 nodemon을 사용하지 않습니다.

## 프론트 개발 스크립트 
    npm run frontend

## 종합 환경 개발 스크립트
    npm run dev
