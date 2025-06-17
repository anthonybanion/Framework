from django import forms
#from django.contrib.auth.forms import UserCreationForm  
from .models import Persona, Usuario
from django.contrib.auth import authenticate
class personaForm(forms.ModelForm):
    class Meta:
        model = Persona
        fields = ['nombre', 'edad', 'email']



class usuarioForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)  # Extrae el argumento 'request'
        super().__init__(*args, **kwargs)  # Llama al __init__ de la clase padre

    class Meta:
        model = Usuario
        fields = ['username', 'password', 'persona']
        widgets = {
            'password': forms.PasswordInput(),
        }
        
    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['request'] = self.request
        return kwargs



class sesionForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        self.request = kwargs.pop('request', None)  # Extrae el argumento 'request' si es pasado
        super().__init__(*args, **kwargs)  # Llama al __init__ de la clase padre

    class Meta:
        model = Usuario
        fields = ['username', 'password']
        widgets = {
            'password': forms.PasswordInput(),  # Para ocultar la contraseña
        }

    # def clean(self):
    #     # Lógica para autenticar al usuario
    #     cleaned_data = super().clean()
    #     username = cleaned_data.get('user')
    #     password = cleaned_data.get('password')

    #     if username and password:
    #         user = authenticate(username=username, password=password)
    #         if user is None:
    #             raise forms.ValidationError('Usuario o contraseña incorrectos.')
    #         if password is None:
    #             raise forms.ValidationError('Usuario o contraseña incorrectos.')

    #     return cleaned_data

    # def get_user(self):
    #     # Implementa la lógica para obtener el usuario autenticado
    #     username = self.cleaned_data.get('user')
    #     password = self.cleaned_data.get('password')
    #     user = authenticate(username=username, password=password)
    #     return user





# class iniciosecionForm(forms.ModelForm):
#     def __init__(self, *args, **kwargs):
#         self.request = kwargs.pop('request', None)  # Extrae el argumento 'request'
#         super().__init__(*args, **kwargs)  # Llama al __init__ de la clase padre

#     class Meta:
#         model = usuario
#         fields = ['user', 'password']
#         widgets = {
#             'password': forms.PasswordInput(),
#         }
    
#     def get_user(self):
#         # Implementa la lógica para obtener el usuario autenticado
#         from django.contrib.auth import authenticate
#         user = authenticate(username=self.cleaned_data['user'], password=self.cleaned_data['password'])
#         return user