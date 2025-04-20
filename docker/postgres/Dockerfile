# 기본 PostgreSQL 이미지를 사용
FROM postgres:latest

# 초기 데이터베이스 초기화 SQL 파일을 Docker-entrypoint에 복사
COPY ./init.sql /docker-entrypoint-initdb.d/
