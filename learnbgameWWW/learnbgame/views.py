from django.shortcuts import render,HttpResponse
from learnbgame import models

# Create your views here.


def index(request):

	return render(request,'learnbgame.html')
	
