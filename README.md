## INIT

##
```
docker-compose up
```

## INIT Model
```
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find ./ -name "__pycache__" -exec rm -rf {} \;
python manage.py makemigrations
python manage.py migrate
```