from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the index.")

def main(request):
    return HttpResponse("Hello, world. You're at text index.")