from django.shortcuts import render,redirect
from django.core.cache import cache
# Create your views here.
def getHomepage(request):
    cache.clear()
    return render(request,'homepage/index.html')
