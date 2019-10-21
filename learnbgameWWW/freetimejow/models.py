from django.db import models

# Create your models here.

class UserInfo(models.Model):
	"""docstring for UserInfo"""
	user = models.CharField(max_length=32)
	pwd = models.CharField(max_length=32)
	userid = models.CharField(max_length=32)
		