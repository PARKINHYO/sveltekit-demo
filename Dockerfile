FROM node:18.15-alpine AS builder

WORKDIR /app

# 의존성 패키지 설치
COPY package*.json ./
RUN npm ci

# 소스 코드 복사
COPY . .

# SvelteKit 애플리케이션 빌드
RUN npm run build

# 불필요한 의존성 패키지 제거
RUN npm prune --production

# 실제로 실행될 런타임 스테이지 설정
FROM node:18.15-alpine

WORKDIR /app

# 빌더 스테이지에서 빌드된 애플리케이션 파일과 의존성 패키지를 복사
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/

# 필요한 의존성 패키지 파일, 환경 변수 파일 복사
COPY package.json .
COPY .env .

EXPOSE 3000

# nodejs 그룹, 사용자 생성
RUN addgroup -g 1001 -S nodejs
RUN adduser -S -D -H -u 1001 -h /app -s /sbin/nologin -G nodejs nodejs


USER nodejs

# 애플리케이션 실행
CMD ["node", "-r", "dotenv/config", "build"]