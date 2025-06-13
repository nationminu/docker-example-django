from django import forms
from .models import Account

class CustomTextInput(forms.TextInput):
    template_name = 'fragments/form/widgets/input.text.html'

class AccountForm(forms.ModelForm):
    username = forms.CharField(
        label='Username',
        required=True,
        max_length=100,
        help_text='',
        widget=CustomTextInput(
            attrs={
                'cols': 6, 'rows': 3, 'class': 'form-input'
            }
        )
    )

    class Meta:
        model = Account
        fields = ['username', 'full_name',  'email', 'password', 'user_code', 'phone_number']
        widgets = {
            'full_name': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
            'password': forms.PasswordInput(attrs={'class': 'form-control'}),
            'user_code': forms.TextInput(attrs={'class': 'form-control'}),
            'phone_number': forms.TextInput(attrs={'class': 'form-control'}),
        }