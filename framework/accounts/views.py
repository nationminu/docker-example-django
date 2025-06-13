from django.shortcuts import render, get_object_or_404, redirect
from .models import Account
from .forms import AccountForm

def user_list(request):
    users = Account.objects.all()
    return render(request, 'pages/accounts/list.html', {'users': users})

def user_detail(request, pk):
    user = get_object_or_404(Account, pk=pk)
    return render(request, 'pages/accounts/view.html', {'user': user})

def user_create(request):
    if request.method == 'POST':
        form = AccountForm(request.POST)
        if form.is_valid():
            account = form.save(commit=False)
            account.created_by = request.user if request.user.is_authenticated else None
            account.save()
            return redirect('accounts:user_detail', pk=account.pk)
    else:
        form = AccountForm()
    return render(request, 'pages/accounts/form.html', {'form': form})

def user_update(request, pk):
    account = get_object_or_404(Account, pk=pk)
    if request.method == 'POST':
        form = AccountForm(request.POST, instance=account)
        if form.is_valid():
            updated = form.save(commit=False)
            updated.updated_by = request.user if request.user.is_authenticated else None
            updated.save()
            return redirect('accounts:user_detail', pk=pk)
    else:
        form = AccountForm(instance=account)
    return render(request, 'pages/accounts/form.html', {'form': form})

def user_delete(request, pk):
    account = get_object_or_404(Account, pk=pk)
    if request.method == 'POST':
        account.delete()
        return redirect('accounts:user_list')
    return render(request, 'pages/accounts/delete.html', {'user': account})
