from django.shortcuts import render,HttpResponse
from freetimejow import models

# Create your views here.

def active(request):
	if request.method == "POST":
		username = request.POST.get("username")
		password = request.POST.get("password")
		userid = request.POST.get("userid")
		models.UserInfo.objects.create(user=username,pwd=password,userid=userid)
	user_list = models.UserInfo.objects.all()
	return render(request,'active.html',{"data":user_list})		
	