# 🐶Ginipet(지니펫) 모바일 프로젝트
반려동물 용품을 관리하고 판매할 수 있는 Full-Stack 웹 애플리케이션
Node.js + React + MySQL 기반 JWT 인증 시스템 구현

##📌 프로젝트 소개
- Ginipet(지니펫) 모바일은 반려동물 용품(사료, 간식, 장난감 등)을 등록(Inert), 조회(Select), 수정(Update), 삭제(Delete)할 수 있는 CRUD 기반의 웹 애플리케이션입니다.
- 회원 인증(JWT), 상품 관리, 페이지네이션, 로그인 보안 처리까지 실제 서비스 구조를 고려하여 설계/개발 하였습니다.

##🛠 기술스택
💻 Frontend
 - React
 - Axios
 - CSS
 - React Router

💻 Backend
 - Node.js
 - Express
 - MySQL
 - JWT
 - bcrypt

☁ 배포 환경(Cloud Type)
 - URL주소 : https://web-ginipet-m-mkvweaew5df78f72.sel3.cloudtype.app/

✨ 주요 기능
🔐 인증 기능
 - 회원가입 (bcrypt 암호화)
 - 로그인 시 JWT 발급
 - 쿠키 저장
 - 인증 미들웨어 적용

🔐 인증 흐름
- 로그인 요청
- 서버에서 bcrypt 비교
- JWT 발급
- 쿠키에 저장
- 인증 미들웨어에서 토큰 검증
- 보호된 API 접근 허용
