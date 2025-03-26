from django.urls import path, include
from .views import register, login_view, logout_view
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

urlpatterns = [
    path('register/', register, name='register'),  # Corrected path
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),

    # Google OAuth Login
    path('google/', GoogleLogin.as_view(), name="google_login"),

    # Include dj-rest-auth and allauth URLs properly
    path('', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls')),
]
