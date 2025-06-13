#!/bin/bash
set -eo pipefail
shopt -s nullglob

PY_HOME="/usr/src/app"
DJANGO_HOME="/usr/src/app/framework"

# creates folders for the application
django_create_app_directories() {
    mkdir -p "$DJANGO_HOME"
    if [ "$(id -u)" = "0" ]; then
        django-admin startproject app "$DJANGO_HOME"
    fi
}

django_migrate_app() {
    cd "$DJANGO_HOME"

    echo "📦 Running makemigrations..."
    python manage.py makemigrations || true  # 실패해도 무시 (변경 없을 수 있음)

    echo "🔧 Running migrate..."
    if ! python manage.py migrate; then
        echo "❌ Migration failed, continuing anyway (dev mode)"
    fi

    # createsuperuser 자동화 (환경변수 필요)
    if [ -n "$DJANGO_SUPERUSER_USERNAME" ] && [ -n "$DJANGO_SUPERUSER_PASSWORD" ] && [ -n "$DJANGO_SUPERUSER_EMAIL" ]; then
        echo "🧙 Creating superuser..."
        python manage.py createsuperuser --noinput || true
    else
        echo "⚠️  Skipping createsuperuser (missing env vars)"
    fi
}

_is_sourced() {
    [ "${BASH_SOURCE[0]}" != "$0" ]
}

_main() {
    if [ ! -f "$DJANGO_HOME/manage.py" ]; then
        django_create_app_directories
    fi

    django_migrate_app

    cd "$PY_HOME"
    echo "👉 Running command: $@"
    exec "$@"
}

if ! _is_sourced; then
    _main "$@"
fi
