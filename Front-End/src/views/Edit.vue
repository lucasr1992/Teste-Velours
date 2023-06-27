<template>
  <div class="container mt-5" >
    <div class="card">
      <div class="card-header">
        <h1>Editar Produto</h1>
        <RouterLink to="/" class="btn btn-success float-end">Voltar</RouterLink>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label>Cod.</label>
          <input  type="text" v-model="modelo.produto.cod_produto" :disabled="true" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Descrição</label>
          <input type="text" v-model="modelo.produto.descricao" :disabled="true" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Valor</label>
          <input type="number" v-model="modelo.produto.valor" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Qnt. Estoque</label>
          <input type="number" v-model="modelo.produto.qnt_estoque" class="form-control"/>
        </div>
        <div class="mb-3">
          <button type="button" @click="editarProduto" class="btn btn-primary">Editar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {    
    name: 'editarProduto',
    data(){
      return{
        modelo: {
          produto:{
            cod_produto:'',
            descricao:'',
            valor:null,
            qnt_estoque:null
          }
        }
      }
    },

    mounted(){
      this.getProducts(this.$route.params.id);
    },

    methods:{
      getProducts(produtoId){
        axios.get(`http://localhost:3000/api/produto/${produtoId}`).then(res => {
          this.modelo.produto = res.data;
        });
      },

      editarProduto(){
        axios.put(`http://localhost:3000/api/produtor/editar/${this.$route.params.id}`, this.modelo.produto)
        .then( res => {  
          if(res.data.error === 'Informe Valor e Qnt. em Estoque'){
            alert("Erro Ao Cadastrar")
          }else{
            alert("Editado com Sucesso")
          }
        }) 
      }
    }
  }

</script>


