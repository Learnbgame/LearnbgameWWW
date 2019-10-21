from django.conf.urls import url 
from pbyhack import views
app_name = "bpyhack"
urlpatterns = [
	url(r'',views.powerBy)
]
