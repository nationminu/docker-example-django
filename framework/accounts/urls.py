from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('', views.user_list, name='user_list'),                   # 전체 목록
    path('create', views.user_create, name='user_create'),        # 생성
    path('<str:pk>', views.user_detail, name='user_detail'),      # 상세
    path('<str:pk>/edit', views.user_update, name='user_update'), # 수정
    path('<str:pk>/delete', views.user_delete, name='user_delete'), #
]
