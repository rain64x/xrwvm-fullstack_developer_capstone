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
    path(route='add_review', view=views.add_review, name='add_review'),

    #get dealers
    path(route='get_dealers', view=views.get_dealerships, name='get_dealers'),
    path(route='get_dealers/<str:state>', view=views.get_dealerships, name='get_dealers_by_state'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
