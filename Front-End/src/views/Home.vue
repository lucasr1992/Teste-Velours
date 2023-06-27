<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <main >
    <h1 class="bg-dark text-light">Lista de Produtos</h1>
    <div class="d-flex p-2">
      <RouterLink to="/cadastro" type="button" class="btn btn-primary ms-auto" >Cadastrar</RouterLink>
    </div>
    <div class="container mt-5">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Qnt. Estoq.</th>
            <th>Comandos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in this.produts" :key="produto.cod_produto">
            <td>{{ produto.cod_produto }}</td>
            <td>{{ produto.descricao }}</td>
            <td>{{ produto.valor }}</td>
            <td>{{ produto.qnt_estoque }}</td>
            <td>
              <RouterLink :to="{ path: '/edit/'+produto.cod_produto}" class="btn btn-success mx-2">Edit</RouterLink>
              <butto type="button" @click="deleteProtuct(produto.cod_produto)" class="btn btn-danger mx-2">Delete</butto>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'produtos',
    data(){
      return{
        produts:[]
      }
    },

    mounted(){
      this.getProduts();
    },

    methods:{
      getProduts(){
        axios.get('http://localhost:3000/api/produtos').then(
          res => {
            this.produts = res.data
            console.log(this.produts)
          }
        );
      },

      deleteProtuct(produtId){
        if(confirm('Deseja Excluir este Item?')){
          axios.delete(`http://localhost:3000/api/produto/del/${produtId}`)
          .then(res => {
            alert("Item Excluido com Sucesso");
            axios.get('http://localhost:3000/api/produtos').then(
              res => {
                this.produts = res.data
                
              }
            );
          })
        }
      }
    }
  }
</script>
