
from django.urls import path
from . import views


urlpatterns = [
    path('cadastro/', views.cadastro_produtos, name='cadastro_produtos'),
    path('todosprodutos/', views.todos_produtos, name='todos_produtos'),
    path('todosvendedores/', views.todos_vendedores, name='todos_vendedores'),
    path('deletarproduto/<id_produto>/', views.deletar_produto, name='deletar_produto'),
]