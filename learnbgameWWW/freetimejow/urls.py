from django.conf.urls import url 
from freetimejow import views
app_name = "freetimejow"

urlpatterns = [
	url(r'',views.active)
]
