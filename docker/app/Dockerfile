# 1. Node.js 이미지 선택 (LTS 버전)
FROM node:20-alpine

# 2. 작업 디렉터리 생성
WORKDIR /app

# 3. package.json, package-lock.json 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. NestJS 코드 복사
COPY . .

# 6. Nest 앱 빌드
RUN npm run build

# 7. 앱 실행
CMD ["node", "dist/main"]

# 8. 필요 포트 노출
EXPOSE 3000
