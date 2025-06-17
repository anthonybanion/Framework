from django.contrib import admin
from .models import Persona, Usuario

# Register your models here.

admin.site.register(Persona)
list_display = ('nombre', 'edad', 'email')


admin.site.register(Usuario)
list_display = ('usuario', 'password', 'persona')
search_fields = ('usuario', 'persona__nombre')
