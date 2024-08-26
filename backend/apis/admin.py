from django.contrib import admin
from .models import Produtos, Vendedores

class ProdutosAdmin(admin.ModelAdmin):
    list_display = ('nome', 'preco', 'vendedor_id')

class VendedoresAdmin(admin.ModelAdmin):
    list_display = ('nome', 'id')



admin.site.register(Produtos, ProdutosAdmin)
admin.site.register(Vendedores, VendedoresAdmin)