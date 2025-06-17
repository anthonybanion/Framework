from django.shortcuts import render, redirect
from django.http import HttpResponse, request
from .models import Persona, Usuario
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, TemplateView
from django.contrib.auth.views import LoginView
from django.contrib.auth import authenticate, login
from .forms import personaForm, usuarioForm, sesionForm
from django.urls import reverse_lazy 
from django.contrib import messages


# Create your views here.

class home(ListView):
    model = Persona
    template_name = 'crud/index.html'
        

class create(CreateView):
    model = Persona
    form_class = personaForm
    template_name = 'crud/create.html'
    success_url = '/crud/'

    def save(request):
        if request.method == 'POST':
            form = personaForm(request.POST)
            if form.is_valid():
                form.save()

class delete(DeleteView):
    model = Persona
    template_name = 'crud/delete.html'
    success_url =  reverse_lazy('index')
    confirm_url= '/crud/'
  
class update(UpdateView):
    model = Persona
    form_class = personaForm
    template_name = 'crud/update.html'
    success_url = reverse_lazy('index')
    confirm_url= '/crud/'

class createUser(CreateView):
    model = Usuario
    form_class = usuarioForm
    template_name = 'login/create-user.html'
    success_url = reverse_lazy('index')
    confirm_url = '/crud/'



class loginView(LoginView):
    form_class = sesionForm  # Usa tu formulario personalizado
    model = Usuario
    template_name = 'login/login.html'  # Plantilla personalizada para el inicio de sesión
    success_url = reverse_lazy('login-success')  # URL a la que se redirige tras el inicio de sesión


class loginSuccess(TemplateView):
    template_name= 'login/login-success.html'


    # def form_invalid(self, form):
    #     messages.error(self.request, 'Usuario o contraseña incorrectos.')
    #     return super().form_invalid(form)

    # def get_form_kwargs(self):
    #     """Añadir el request al formulario para ser usado en el init del formulario"""
    #     kwargs = super().get_form_kwargs()
    #     kwargs['request'] = self.request
    #     return kwargs




# class login(LoginView):
#     model = usuario
#     form_class = iniciosecionForm
#     template_name = 'login/login.html'
#     success_url = reverse_lazy('index')
#     confirm_url = '/crud/'

#     # def get_form_kwargs(self):
#     #     kwargs = super().get_form_kwargs()
#     #     kwargs['request'] = self.request  # Agrega el request a los kwargs
#     #     return kwargs
    
#     def form_invalid(self, form):
#         messages.warning(self.request, 'Usuario o contraseña incorrectos.')
#         return super().form_invalid(form)

    # def form_valid(self, form):
    #     username = form.cleaned_data['user']
    #     password = form.cleaned_data['password']
    #     user = authenticate(username=username, password=password)

    #     if user is not None:
    #         login(self.request, user)
    #         return super().form_valid(form)
    #     else:
    #         form.add_error(None, "Credenciales inválidas")
    #         return self.form_invalid(form)