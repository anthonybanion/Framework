from django.urls import path
from .views import home, create, delete, update, loginView, createUser, loginSuccess

urlpatterns = [
    path('', home.as_view(), name='index'),
    path('create/', create.as_view(), name='create'),
    path('delete/<int:pk>/', delete.as_view(), name='delete'),
    path('update/<int:pk>/', update.as_view(), name='update'),
    path('create-user/', createUser.as_view(), name='create-user' ),
    path('login/', loginView.as_view(), name='login'),
    path('login-success/',loginSuccess.as_view(), name='login-success')
]