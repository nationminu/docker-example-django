#!/usr/bin/env bash
set -e

# 기본 DJANGO_HOME 설정
if [ -z "$DJANGO_HOME" ] || [ ! -d "$DJANGO_HOME" ]; then
    DJANGO_HOME="/usr/src/app/framework"
fi

# 기본 포트 설정
PORT="${PORT:-8080}"

echo "Using port: $PORT"

# Django 서버 실행
exec python "${DJANGO_HOME}/manage.py" runserver 0.0.0.0:${PORT}
