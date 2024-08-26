from django.db import models

class Vendedores(models.Model):
    nome = models.CharField(max_length=40)

    class Meta:
        verbose_name:'Vendedor'
        verbose_name_plural:'Vendedores'

    def __str__(self):
        return self.nome



class Produtos(models.Model):
    nome = models.CharField(max_length=40)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    vendedor = models.ForeignKey(Vendedores, on_delete=models.CASCADE)


    class Meta:
        verbose_name: 'Produto'
        verbose_name_plural: 'Produtos'
    
    def __str__(self):
        return self.nome


