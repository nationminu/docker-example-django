## INIT

##
```
docker-compose up
```

## INIT Model
```
find . -path "*/migrations/*.py" -not -name "__init__.py" -delet
python manage.py makemigrations
python manage.py migrate
```