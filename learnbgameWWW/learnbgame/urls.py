
from django.conf.urls import url
from learnbgae import views

urlpatterns = [
	url(r'',views.index)
	url(r'pbyhack',views.pbyhack)
]