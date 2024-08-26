from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from . models import Produtos, Vendedores
from . serializers import ProdutosSerializer, ProdutosEvendedoresSerializer, VendedoresSerializer
from rest_framework.response import Response
from rest_framework import status  
from rest_framework.decorators import api_view

@api_view(['POST'])
def cadastro_produtos(request):

    if request.method == 'POST':
        
        print(request.data)
        novo_produto = request.data
        serializer = ProdutosSerializer(data=novo_produto)


        if serializer.is_valid():
            serializer.save()   
            return Response(serializer.data)
        

    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)



@api_view(['GET'])
def todos_produtos(request):

    if request.method =='GET':

        produtos = Produtos.objects.all()
        serializer = ProdutosEvendedoresSerializer(produtos, many=True)

        return Response(serializer.data)

    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['GET'])
def todos_vendedores(request):

    if request.method == 'GET':
        
        vendedores = Vendedores.objects.all()
        serializer = VendedoresSerializer(vendedores, many=True)
        print(serializer.data)
        
        return Response(serializer.data)
    
    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['DELETE'])
def deletar_produto(request,id_produto):

    if request.method =='DELETE':
        produto = get_object_or_404(Produtos, pk=id_produto)
        produto.delete()
        return Response('Deltado com sucesso')

    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    