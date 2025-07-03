from django.db import models

class Produtos(models.Model):
    nome = models.CharField(max_length=40)
    preco = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        verbose_name: 'Produto'
        verbose_name_plural: 'Produtos'
    
    def __str__(self):
        return self.nome


