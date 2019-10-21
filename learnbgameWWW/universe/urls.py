from django.conf.urls import url
from universe import views
app_name = "universe"
urlpatterns = [
	url(r'',views.index)
]
