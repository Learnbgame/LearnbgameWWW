from django.shortcuts import render,HttpResponse
from universe import models

# Create your views here.


def index(request):

	return render(request,'central.html')