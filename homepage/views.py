from django.shortcuts import render,redirect

# Create your views here.
def getHomepage(request):
    return render(request,'homepage/homepage.html')
