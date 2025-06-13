from django.contrib import admin
from django.urls import path, include

from app.views import main
from .views import errors  # error 핸들러 import

urlpatterns = [
    path('', main.index),
    path('full', main.full),
    path('mobile', main.mobile),
    path('modal', main.modal),

    ## accounts
    path('accounts/', include('accounts.urls')),

    path('error', main.error),
    path("photo/", include("photo.urls")),
]

# 에러 핸들러 등록
handler400 = 'app.views.errors.handler400'
handler403 = 'app.views.errors.handler403'
handler404 = 'app.views.errors.handler404'
handler500 = 'app.views.errors.handler500'