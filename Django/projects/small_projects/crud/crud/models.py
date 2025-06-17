from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class Persona(models.Model):
    nombre = models.CharField(max_length=50)
    edad = models.IntegerField()
    email = models.EmailField()

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Persona'
        verbose_name_plural = 'Personas'


class UserManager(BaseUserManager):
    def create_user(self, username, password=None, persona=None):
        if not username:
            raise ValueError('El nombre de usuario es obligatorio')
        if not password:
            raise ValueError('La contraseña es obligatoria')

        user = self.model(username=username, persona=persona)
        user.set_password(password)  # ✅ encripta la contraseña
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password):
        user = self.create_user(username=username, password=password)
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)
        return user


class Usuario(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=50, unique=True)
    persona = models.OneToOneField(Persona, on_delete=models.CASCADE, null=True, blank=True)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []  # Puede incluir email si luego lo agregás

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
