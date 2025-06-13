FROM python:3.13-slim

# 환경 변수 설정
ENV PY_HOME=/usr/src/app \
    DJANGO_HOME=/usr/src/app/framework

# 작업 디렉토리 설정
WORKDIR $PY_HOME

# 소스 및 스크립트 복사
COPY . $PY_HOME
COPY docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
COPY docker/runserver.sh $PY_HOME/runserver.sh

# DB 클라이언트 설치 및 패키지 설치
RUN apt-get update \
    && apt-get install -y --no-install-recommends postgresql-client default-libmysqlclient-dev default-mysql-client python3-dev build-essential gcc pkg-config \
    && rm -rf /var/lib/apt/lists/* \
    && chmod +x /usr/local/bin/docker-entrypoint.sh $PY_HOME/runserver.sh \
    && pip install --upgrade pip \
    && pip install --no-cache-dir -r docker/requirements.txt

# 포트 노출
EXPOSE 8080

# Entrypoint 스크립트
ENTRYPOINT ["docker-entrypoint.sh"]

# 기본 실행 커맨드
CMD ["./runserver.sh"]
