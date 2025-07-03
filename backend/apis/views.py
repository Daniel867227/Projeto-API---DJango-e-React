from django.shortcuts import render
from django.http import HttpResponse
from . models import Produtos
from . serializers import ProdutosSerializer
from rest_framework.response import Response
from rest_framework import status  
from rest_framework.decorators import api_view

@api_view(['GET'])
def todos_produtos(request):

    if request.method == 'GET':

        
        produtos = Produtos.objects.all()
        serializer = ProdutosSerializer(produtos, many=True)
        return Response(serializer.data)
        

    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
