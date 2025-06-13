from django.shortcuts import render

from django.template.loader import get_template
from django.http import HttpResponse

def index(request):
    return render(request, "pages/layout/base.html")

def full(request):
    return render(request, "pages/layout/full.html")

def mobile(request):
    return render(request, "pages/layout/mobile.html")

def modal(request):
    return render(request, "pages/layout/modal.html")

def jinja(request):
    template = get_template("pages/dashboard.j2")  # jinja_templates/index.j2
    html = template.render({"message": "Hello Jinja2!"}, request)
    return HttpResponse(html)

def error(request):
    return render(request, 'index.html', status=500)
