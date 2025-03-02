# Uncomment the imports before you add the code
from django.urls import path
from django.conf.urls.static import static
from . import views

from django.conf import settings

app_name = 'djangoapp'
urlpatterns = [
    # # path for registration

    # path for login
    # path(route='login', view=views.login_user, name='login'),

    # path for get cars view
    path(route='get_cars', view=views.get_cars, name ='getcars'),

    # path for dealer reviews view

    # path for add a review view

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
