from rest_framework import serializers
from . models import Produtos, Vendedores

class VendedoresSerializer(serializers.ModelSerializer):

    class Meta:
        model= Vendedores
        fields = '__all__'




class ProdutosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Produtos
        fields = '__all__'



class ProdutosEvendedoresSerializer(serializers.ModelSerializer):

    vendedor = VendedoresSerializer(read_only=True)

    class Meta:
        model = Produtos
        fields= '__all__'



