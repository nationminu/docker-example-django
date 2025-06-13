from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account

class AccountAdmin(UserAdmin):
    model = Account
    list_display = ('id', 'username', 'email', 'is_active', 'is_staff')
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('개인 정보', {'fields': ('first_name', 'last_name', 'full_name', 'phone_number')}),
        ('권한', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('이력', {'fields': ('created_at', 'created_by', 'updated_at', 'updated_by', 'deleted_at', 'deleted_by')}),
    )

admin.site.register(Account, AccountAdmin)